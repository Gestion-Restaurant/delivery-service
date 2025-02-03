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

router.get('/', (req, res) => {
    getAllDeliveries(req, res);
});

router.get('/:id', (req, res) => {
    getDeliveryById(req, res);
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

router.post('/', (req, res) => {
    createDelivery(req, res);
});

router.post('/assign/:id', (req, res) => {
    assignDeliveryPerson(req, res);
});

router.patch('/status/:orderId', (req, res) => {
    updateDeliveryStatus(req, res);
});

export default router;