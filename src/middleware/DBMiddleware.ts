import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db_uri = process.env.DB_URI || '';

export const mongooseConnect = async () => {
    mongoose.connect(db_uri)
        .then(() => console.log('Database connected successfully'))
        .catch(err => {
            console.error('Database connection error:', err);
            process.exit(1);
        });
};

