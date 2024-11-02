import mongoose, { Schema } from 'mongoose';
import IDish from '../interfaces/dishInterface';

const DishSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true },
});

export default mongoose.model<IDish>('Dish', DishSchema);