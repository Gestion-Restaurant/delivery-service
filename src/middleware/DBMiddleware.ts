import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db_uri = process.env.DB_URI || '';

export const mongooseConnect = async () => {
    try {
        await mongoose.connect(db_uri);
        console.log("✅ Connected to DB");
        
    } catch (error) {
        console.log("❌ Error connecting to DB");
        console.log(error);
    }
};

