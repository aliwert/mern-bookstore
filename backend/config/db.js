/*------------------------------------------------------ */
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
/*------------------------------------------------------ */
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB);
    console.log("MONGODB CONNECTED.");
  } catch (error) {
    console.log("Error: " + error);
    process.exit(1);
  }
};
/*------------------------------------------------------ */
