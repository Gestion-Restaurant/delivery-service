import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db_uri = process.env.DB_URI ?? '';

export const mongooseConnect = async () => {
    mongoose.connect(db_uri)
        .then(() => console.log('✅ Connected to DB'))
        .catch(err => {
            console.error('❌ Error connecting to DB:', err);
            process.exit(1);
        });
};

