import mongoose, { Document } from 'mongoose';
import { DeliveryStatusType } from '../types/deliveryStatus';

interface IDelivery extends Document {
    orderId: mongoose.Types.ObjectId;
    deliveryPersonId: mongoose.Types.ObjectId;
    status: DeliveryStatusType;
    deliveryTime: Date;
    updatedAt: Date;
}

export default IDelivery;