import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // debug logs
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
