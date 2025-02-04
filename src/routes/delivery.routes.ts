import { Router } from 'express';
import {
    getAllDeliveries,
    getDeliveryById,
    getDeliveriesByDeliveryPersonId,
    getDeliveriesByOrderId,
    assignDeliveryPerson,
    getDeliveriesByStatus,
    updateDeliveryStatus,
    createDelivery
} from '../controllers/delivery.controller';

const router = Router();

// List all specific routes first
router.post('/assignForDelivery', (req, res) => {
    assignDeliveryPerson(req, res);
});

router.get('/order/:orderId', (req, res) => {
    getDeliveriesByOrderId(req, res);
});

router.get('/deliveryPerson/:deliveryPersonId', (req, res) => {
    getDeliveriesByDeliveryPersonId(req, res);
});

router.get('/status/:status', (req, res) => {
    getDeliveriesByStatus(req, res);
});

router.patch('/status/:orderId', (req, res) => {
    updateDeliveryStatus(req, res);
});

// Generic routes last
router.get('/:id', (req, res) => {
    getDeliveryById(req, res);
});

router.post('/', (req, res) => {
    createDelivery(req, res);
});

router.get('/', (req, res) => {
    getAllDeliveries(req, res);
});

export default router;