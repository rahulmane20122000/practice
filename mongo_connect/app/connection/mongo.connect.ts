import mongoose from "mongoose";

const { MONGO_URI } = process.env;
export const connectToMongo = async () => {
  try {
   await mongoose.connect(MONGO_URI || "");
   console.log("Connected");
  } catch (error) {
   throw "COULD NOT CONNECT!!!"
  }
}