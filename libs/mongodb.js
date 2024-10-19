import mongoose from "mongoose";

const connectMongoDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected DB")
  
  
};

export default connectMongoDB;
