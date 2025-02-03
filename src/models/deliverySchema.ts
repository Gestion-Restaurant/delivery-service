import mongoose, { Schema } from 'mongoose';
import IDelivery from '../interfaces/deliveryInterface';
import { DeliveryStatus } from '../enums/deliveryStatusEnum';

const DeliverySchema: Schema = new Schema({
    deliveryPersonId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        enum: Object.values(DeliveryStatus),
        default: DeliveryStatus.PENDING
    },
    address: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

export default mongoose.model<IDelivery>('deliveries', DeliverySchema);