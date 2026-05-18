import mongoose from "mongoose";

const connectDB = async () => {
    const rawUri = process.env.MONGODB_URI;
    if (!rawUri) {
        throw new Error("MONGODB_URI is not defined in environment");
    }

    const uri = rawUri.trim().replace(/^['\"]|['\"]$/g, "");
    const database = process.env.MONGODB_DB_NAME ?? "e-commerce";
    const hasDatabase = /mongodb(?:\+srv)?:\/\/[^/]+\/[^?]+/.test(uri);
    const connectionString = hasDatabase ? uri : `${uri}/${database}`;

    try {
        await mongoose.connect(connectionString);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

export default connectDB;