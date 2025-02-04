import { Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'client' | 'chef' | 'delivery';
    sessionToken: string;
    verified: boolean;
    address?: string;
    description?: string;
    openingTime?: string;
    closingTime?: string;
}

export default IUser;