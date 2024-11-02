import mongoose, { Schema } from 'mongoose';
import IKitchenStatus from '../interfaces/kitchenStatusInterface';

const KitchenStatusSchema: Schema = new Schema({
    orderId: { type: mongoose.Types.ObjectId, ref: 'Order', required: true },
    status: { type: String, enum: ['in_preparation', 'ready_to_serve'], required: true },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IKitchenStatus>('KitchenStatus', KitchenStatusSchema);