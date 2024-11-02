import mongoose, { Document } from 'mongoose';

interface IOrder extends Document {
    clientId: mongoose.Types.ObjectId;
    items: { dishId: mongoose.Types.ObjectId; quantity: number }[];
    status: 'pending' | 'in_kitchen' | 'ready_for_delivery' | 'delivered';
    totalAmount: number;
    createdAt: Date;
}

export default IOrder;