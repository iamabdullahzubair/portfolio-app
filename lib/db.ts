import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'portfolio_db';

// Fail fast in serverless environments (Vercel has 10s Hobby limit)
// Default MongoDB driver timeout is 30s which triggers 504 FUNCTION_INVOCATION_TIMEOUT
const clientOptions = {
  serverSelectionTimeoutMS: 2000, // 2s max wait to discover cluster/primary
  connectTimeoutMS: 2000,         // 2s TCP connection timeout
  socketTimeoutMS: 3000,          // 3s socket inactivity timeout
  maxPoolSize: 10,
};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export function isDbConfigured(): boolean {
  return Boolean(uri && uri.trim().length > 0);
}

export async function getMongoClient(): Promise<MongoClient | null> {
  if (!isDbConfigured()) {
    return null;
  }

  try {
    if (process.env.NODE_ENV === 'development') {
      if (!global._mongoClientPromise) {
        client = new MongoClient(uri, clientOptions);
        global._mongoClientPromise = client.connect().catch((err) => {
          global._mongoClientPromise = undefined;
          throw err;
        });
      }
      return await global._mongoClientPromise;
    } else {
      if (!clientPromise) {
        client = new MongoClient(uri, clientOptions);
        clientPromise = client.connect().catch((err) => {
          clientPromise = null;
          throw err;
        });
      }
      return await clientPromise;
    }
  } catch (error) {
    console.warn('[db] MongoDB connection could not be established:', (error as any)?.message);
    return null;
  }
}

export async function getDb(): Promise<Db | null> {
  try {
    const mongoClient = await getMongoClient();
    if (!mongoClient) return null;
    return mongoClient.db(dbName);
  } catch (err) {
    console.warn('[db] Error accessing database instance:', (err as any)?.message);
    return null;
  }
}
