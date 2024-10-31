import { Delivery } from './../models/deliverySchema';
import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to the delivery service" });
});


const DeliveryRouter = {
    router,
};

export default DeliveryRouter;