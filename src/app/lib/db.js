import mongoose from "mongoose";

export async function connectDB() {
  // If already connected → do not reconnect
  if (mongoose.connection.readyState === 1) {
    console.log("📦 MongoDB already connected");
    return mongoose.connection.asPromise();
  }

  const MONGO_URI =
    "mongodb+srv://sojanwebyfy_db_user:h8QAojygFWJKaeJY@cluster.osjnccf.mongodb.net/reach?retryWrites=true&w=majority&appName=Cluster";

  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI, {
      dbName: "reach",
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
  }

  return mongoose.connection;
}
