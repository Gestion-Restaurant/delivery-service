import { Document } from 'mongoose';

interface IDish extends Document {
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    category: string;
    id_restaurant: string;
}

export default IDish;