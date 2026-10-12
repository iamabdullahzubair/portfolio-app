import { getDb, isDbConfigured } from './db';
import { defaultPortfolioData } from './portfolio-config';
import { PortfolioData } from './types';

const COLLECTION_NAME = 'portfolio';
const DOCUMENT_ID = 'main';

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
      message: 'MONGODB_URI is not set in .env.local. Running on default local config fallback.',
    };
  }

  try {
    const db = await getDb();
    if (!db) {
      return {
        isConfigured: true,
        connected: false,
        source: 'fallback',
        message: 'Could not connect to MongoDB client.',
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
}

export async function getPortfolioData(): Promise<PortfolioData> {
  if (!isDbConfigured()) {
    return defaultPortfolioData;
  }

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
  } catch (error) {
    console.error('Error fetching portfolio data from DB, falling back to default:', error);
    return defaultPortfolioData;
  }
}

export async function updatePortfolioData(data: PortfolioData): Promise<{ success: boolean; message: string }> {
  if (!isDbConfigured()) {
    return {
      success: false,
      message: 'MONGODB_URI is not set in .env.local. Please add your connection string to save data to the cloud database.',
    };
  }

  try {
    const db = await getDb();
    if (!db) {
      return { success: false, message: 'Database client unavailable.' };
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
}

export async function seedPortfolioData(): Promise<{ success: boolean; message: string }> {
  return updatePortfolioData(defaultPortfolioData);
}
