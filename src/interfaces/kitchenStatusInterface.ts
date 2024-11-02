import mongoose, { Document } from 'mongoose';

interface IKitchenStatus extends Document {
    orderId: mongoose.Types.ObjectId;
    status: 'in_preparation' | 'ready_to_serve';
    updatedAt: Date;
}

export default IKitchenStatus;