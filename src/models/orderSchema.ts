import mongoose, { Schema } from 'mongoose';
import IOrder from '../interfaces/orderInterface';

const OrderSchema: Schema = new Schema({
    clientId: { type: mongoose.Types.ObjectId, ref: 'Client', required: true },
    items: [{
        dishId: { type: mongoose.Types.ObjectId, ref: 'Dish', required: true },
        quantity: { type: Number, required: true }
    }],
    status: { type: String, enum: ['pending', 'in_kitchen', 'ready_for_delivery', 'delivered'], default: 'pending' },
    totalAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IOrder>('Order', OrderSchema);