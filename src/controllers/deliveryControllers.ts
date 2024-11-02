// src/controllers/deliveryController.ts
import { Request, Response, NextFunction } from 'express';
import Delivery from '../models/deliverySchema';
import IDelivery from '../interfaces/deliveryInterface';
import logger from '../utils/logger';

// Get all deliveries
export const getAllDeliveries = async (req: Request, res: Response): Promise<void> => {
    try {
        const deliveries: IDelivery[] = await Delivery.find();
        res.status(200).json(deliveries);
    } catch (error) {
        logger.error(`Error getting deliveries: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a delivery by ID
export const getDeliveryById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const delivery: IDelivery | null = await Delivery.findById(id);

        if (!delivery) {
            res.status(404).json({ error: 'Delivery not found' });
        }

        res.status(200).json(delivery);
    } catch (error) {
        logger.error(`Error getting delivery: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all deliveries by order ID
export const getDeliveriesByOrderId = async (req: Request, res: Response): Promise<void> => {
    try {
        const { orderId } = req.params;
        const deliveries: IDelivery[] = await Delivery.find({ orderId });

        if (!deliveries.length) {
            res.status(404).json({ error: 'Deliveries not found' });
        }

        res.status(200).json(deliveries);
    } catch (error) {
        logger.error(`Error getting deliveries: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all deliveries by delivery person ID
export const getDeliveriesByDeliveryPersonId = async (req: Request, res: Response): Promise<void> => {
    try {
        const { deliveryPersonId } = req.params;
        const deliveries: IDelivery[] = await Delivery.find({ deliveryPersonId });

        if (!deliveries.length) {
            res.status(404).json({ error: 'Deliveries not found' });
        }

        res.status(200).json(deliveries);
    } catch (error) {
        logger.error(`Error getting deliveries: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get All Deliveries by Status
export const getDeliveriesByStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const { status } = req.params;
        const deliveries: IDelivery[] = await Delivery.find({ status });

        if (!deliveries.length) {
            res.status(404).json({ error: 'Deliveries not found' });
        }

        res.status(200).json(deliveries);
    } catch (error) {
        logger.error(`Error getting deliveries: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Assign a delivery person to an order
export const assignDeliveryPerson = async (req: Request, res: Response) => {
    try {
        const { orderId, deliveryPersonId } = req.body;

        const newDelivery = new Delivery({ orderId, deliveryPersonId });
        await newDelivery.save();

        logger.info(`Assigned delivery person ${deliveryPersonId} to order ${orderId}`);
        res.status(201).json(newDelivery);
    } catch (error) {
        logger.error(`Error assigning delivery person: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Update the delivery status
export const updateDeliveryStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const { status, deliveryTime } = req.body;

        const delivery = await Delivery.findByIdAndUpdate(
            id,
            { status, deliveryTime },
            { new: true }
        );

        if (!delivery) {
            res.status(404).json({ error: 'Delivery not found' });
        }

        logger.info(`Updated delivery ${id} status to ${status}`);
        res.status(200).json(delivery);
    } catch (error) {
        logger.error(`Error updating delivery status: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
