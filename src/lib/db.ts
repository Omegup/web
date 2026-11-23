import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalCache = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  const cache = globalCache.mongooseCache ?? { conn: null, promise: null };
  globalCache.mongooseCache = cache;

  if (cache.conn) return cache.conn;

  cache.promise ??= mongoose.connect(uri);
  cache.conn = await cache.promise;
  return cache.conn;
}
