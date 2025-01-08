import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: 'config.env' });

const dbConnection = process.env.DB_CONNECTION;

if (!dbConnection) {
  console.error("DB_CONNECTION is not defined in the .env file");
  process.exit(1);
}

export const connectDB = async () => {
  try {
    await mongoose.connect(dbConnection);
    console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
