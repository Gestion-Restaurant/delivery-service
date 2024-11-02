import mongoose, { Schema } from 'mongoose';
import IClient from '../interfaces/clientInterface';

const ClientSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['client', 'chef', 'delivery'], required: true },
    sessionToken: { type: String, required: true },
});

export default mongoose.model<IClient>('Client', ClientSchema);