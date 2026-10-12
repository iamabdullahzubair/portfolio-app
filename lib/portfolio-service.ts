import { getDb, isDbConfigured } from './db';
import { defaultPortfolioData } from './portfolio-config';
import { PortfolioData } from './types';

const COLLECTION_NAME = 'portfolio';
const DOCUMENT_ID = 'main';

// Strict ceiling for any database query before falling back to static config.
// Keeps serverless response under 2.5s, well within Vercel's 10s timeout.
const DB_TIMEOUT_MS = 2500;

function withTimeout<T>(promise: Promise<T>, ms: number, fallbackValue: T): Promise<T> {
  let timer: NodeJS.Timeout | undefined;
  const timeoutPromise = new Promise<T>((resolve) => {
    timer = setTimeout(() => {
      console.warn(`[portfolio-service] Operation timed out after ${ms}ms. Returning fallback.`);
      resolve(fallbackValue);
    }, ms);
  });

  return Promise.race([
    promise.catch((err) => {
      console.warn('[portfolio-service] Operation error:', err?.message || err);
      return fallbackValue;
    }),
    timeoutPromise,
  ]).finally(() => {
    if (timer) clearTimeout(timer);
  });
}

export interface DatabaseStatus {
  isConfigured: boolean;
  connected: boolean;
  source: 'mongodb' | 'fallback';
  message: string;
}

export async function getDbStatus(): Promise<DatabaseStatus> {
  if (!isDbConfigured()) {
    return {
      isConfigured: false,
      connected: false,
      source: 'fallback',
      message: 'MONGODB_URI is not set in environment. Running on default local config fallback.',
    };
  }

  const checkPromise = (async (): Promise<DatabaseStatus> => {
    try {
      const db = await getDb();
      if (!db) {
        return {
          isConfigured: true,
          connected: false,
          source: 'fallback',
          message: 'Could not connect to MongoDB client. Verify network access or IP whitelist.',
        };
      }

      // Ping DB to confirm active connection
      await db.command({ ping: 1 });
      return {
        isConfigured: true,
        connected: true,
        source: 'mongodb',
        message: 'Connected to MongoDB Cloud Atlas successfully.',
      };
    } catch (err: any) {
      return {
        isConfigured: true,
        connected: false,
        source: 'fallback',
        message: `Database connection error: ${err.message || 'Unknown error'}. Falling back to default data.`,
      };
    }
  })();

  return withTimeout<DatabaseStatus>(checkPromise, DB_TIMEOUT_MS, {
    isConfigured: true,
    connected: false,
    source: 'fallback',
    message: 'MongoDB connection timed out (Atlas Network Access / IP not allowed). Falling back to default data.',
  });
}

export async function getPortfolioData(): Promise<PortfolioData> {
  if (!isDbConfigured()) {
    return defaultPortfolioData;
  }

  const fetchPromise = (async (): Promise<PortfolioData> => {
    try {
      const db = await getDb();
      if (!db) {
        return defaultPortfolioData;
      }

      const doc = await db.collection(COLLECTION_NAME).findOne({ _id: DOCUMENT_ID as any });

      if (!doc) {
        // Document not yet created in DB, return default data
        return defaultPortfolioData;
      }

      // Strip out MongoDB internal _id before returning
      const { _id, ...cleanData } = doc;
      return cleanData as PortfolioData;
    } catch (error: any) {
      console.warn('Error fetching portfolio data from DB, falling back to default:', error?.message || error);
      return defaultPortfolioData;
    }
  })();

  return withTimeout<PortfolioData>(fetchPromise, DB_TIMEOUT_MS, defaultPortfolioData);
}

export async function updatePortfolioData(data: PortfolioData): Promise<{ success: boolean; message: string }> {
  if (!isDbConfigured()) {
    return {
      success: false,
      message: 'MONGODB_URI is not set in environment. Please add your connection string to save data to the cloud database.',
    };
  }

  const updatePromise = (async () => {
    try {
      const db = await getDb();
      if (!db) {
        return { success: false, message: 'Database client unavailable. Check MongoDB Atlas Network Access.' };
      }

      const payload = {
        ...data,
        updatedAt: new Date().toISOString(),
      };

      await db.collection(COLLECTION_NAME).updateOne(
        { _id: DOCUMENT_ID as any },
        { $set: payload },
        { upsert: true }
      );

      return {
        success: true,
        message: 'Portfolio data updated in Cloud Database successfully!',
      };
    } catch (error: any) {
      console.error('Error updating portfolio in MongoDB:', error);
      return {
        success: false,
        message: `Failed to save to database: ${error?.message || 'Database error'}`,
      };
    }
  })();

  return withTimeout(updatePromise, 4000, {
    success: false,
    message: 'Database update timed out. Please check your MongoDB Atlas Network Access (whitelist 0.0.0.0/0).',
  });
}

export async function seedPortfolioData(): Promise<{ success: boolean; message: string }> {
  return updatePortfolioData(defaultPortfolioData);
}

