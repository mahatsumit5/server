import mongoose from "mongoose";
export const connectToDatabase = async () => {
  const db = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(db);
    conn && console.log("Connected to MongoDB");
  } catch (error) {}
};
