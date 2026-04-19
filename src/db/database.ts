import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("DB error:", err);
        process.exit(1);
    }
};

export default connectDB;