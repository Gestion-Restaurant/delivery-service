import mongoose, { Document } from 'mongoose';
import { DeliveryStatus } from '../types/deliveryStatus';

interface IDelivery extends Document {
    _id: mongoose.Types.ObjectId;
    deliveryPersonId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    orderId: mongoose.Types.ObjectId;
    status: DeliveryStatus;
    address: string;
    createdAt: Date;
    updatedAt: Date;
}

export default IDelivery;