// src/controllers/deliveryController.ts
import { Request, Response } from 'express';
import Delivery from '../models/deliverySchema';
import IDelivery from '../interfaces/deliveryInterface';
import logger from '../utils/logger';
import { DeliveryStatus } from '../types/deliveryStatus';
import axios from 'axios';
import { config } from '../config/config';

// Get all deliveries
export const getAllDeliveries = async (req: Request, res: Response): Promise<Response> => {
    try {
        const deliveries: IDelivery[] = await Delivery.find({
            status: { $in: [DeliveryStatus.READY_FOR_DELIVERY] }
        });
        return res.status(200).json(deliveries);
    } catch (error) {
        logger.error(`Error getting deliveries: ${error}`);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a delivery by ID
export const getDeliveryById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const delivery: IDelivery | null = await Delivery.findById(id);

        console.log(delivery);
        if (!delivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }

        return res.status(200).json(delivery);
    } catch (error) {
        logger.error(`Error getting delivery: ${error}`);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all deliveries by order ID
export const getDeliveriesByOrderId = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { orderId } = req.params;
        const deliveries: IDelivery[] = await Delivery.find({ orderId });

        if (!deliveries.length) {
            return res.status(404).json({ error: 'Deliveries not found' });
        }

        return res.status(200).json(deliveries);
    } catch (error) {
        logger.error(`Error getting deliveries: ${error}`);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all deliveries by delivery person ID
export const getDeliveriesByDeliveryPersonId = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { deliveryPersonId } = req.params;
        const deliveries: IDelivery[] = await Delivery.find({ deliveryPersonId });

        return res.status(200).json(deliveries);
    } catch (error) {
        logger.error(`Error getting deliveries: ${error}`);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get All Deliveries by Status
export const getDeliveriesByStatus = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { status } = req.params;
        const deliveries: IDelivery[] = await Delivery.find({ status });

        if (!deliveries.length) {
            return res.status(404).json({ error: 'Deliveries not found' });
        }

        return res.status(200).json(deliveries);
    } catch (error) {
        logger.error(`Error getting deliveries: ${error}`);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Create a new delivery
export const createDelivery = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { deliveryPersonId, clientId, orderId, status, address, createdAt, updatedAt } = req.body;

        const newDelivery = new Delivery({ deliveryPersonId, clientId, orderId, status, address, createdAt, updatedAt });
        await newDelivery.save();

        logger.info(`Created new delivery for order ${orderId}`);
        return res.status(201).json(newDelivery);
    } catch (error) {
        logger.error(`Error creating delivery: ${error}`);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Assign a delivery person to an order
export const assignDeliveryPerson = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { deliveryPersonId } = req.body;
        const id = req.query.orderId as string;
        
        const delivery = await Delivery.findOne({ orderId: id });
        if (!delivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }
        if (delivery.deliveryPersonId) {
            return res.status(400).json({ error: 'Delivery already assigned' });
        }
        delivery.deliveryPersonId = deliveryPersonId;
        delivery.status = DeliveryStatus.ASSIGNED;
        
        await axios.patch(`${config.orderServiceUrl}/orders/ById/${id}`, { status: DeliveryStatus.ASSIGNED });
        await delivery.save();

        return res.status(201).json(delivery);
    } catch (error) {
        logger.error(`Error assigning delivery person: ${error}`);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Update the delivery status
export const updateDeliveryStatus = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const delivery = await Delivery.findOneAndUpdate(
            { orderId },
            { status },
            { new: true }
        );

        if (!delivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }

        return res.status(200).json(delivery);
    } catch (error) {
        logger.error(`Error updating delivery status: ${error}`);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
