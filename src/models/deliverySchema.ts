import mongoose, { Schema } from 'mongoose';
import IDelivery from '../interfaces/deliveryInterface';
import { DeliveryStatus } from '../enums/deliveryStatusEnum';

const DeliverySchema: Schema = new Schema({
    orderId: { type: mongoose.Types.ObjectId, ref: 'Order', required: true },
    deliveryPersonId: { type: mongoose.Types.ObjectId, ref: 'Client', required: true },
    status: { type: String, enum: DeliveryStatus, default: 'assigned' },
    deliveryTime: { type: Date },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IDelivery>('deliveries', DeliverySchema);