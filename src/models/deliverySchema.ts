import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
    rf_id_order: {
        type: Number,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    delivery_start_date: {
        type: Date,
        required: true
    },
    delivery_end_date: {
        type: Date,
        required: true
    },
    delivery_status: {
        type: String,
        required: true
    },
    delivery_address: {
        type: String,
        required: true
    },
    delivery_agent: {
        type: Number,
        required: true
    },
});

export const Delivery = mongoose.model('Delivery', deliverySchema);