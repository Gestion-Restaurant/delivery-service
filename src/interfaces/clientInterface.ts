import { Document } from 'mongoose';

interface IClient extends Document {
    name: string;
    email: string;
    password: string;
    role: 'client' | 'chef' | 'delivery';
    sessionToken: string;
}

export default IClient;