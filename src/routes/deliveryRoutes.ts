import { Router } from 'express';
import {
    getAllDeliveries,
    getDeliveryById,
    getDeliveriesByDeliveryPersonId,
    getDeliveriesByOrderId,
    assignDeliveryPerson,
    getDeliveriesByStatus,
    updateDeliveryStatus
} from '../controllers/deliveryControllers';

const router = Router();

router.get('/', getAllDeliveries);                     // Get all deliveries

router.get('/:id', getDeliveryById);                   // Get a delivery by ID

router.get('/order/:orderId', getDeliveriesByOrderId); // Get all deliveries by order ID

router.get('/deliveryPerson/:deliveryPersonId',
    getDeliveriesByDeliveryPersonId);                  // Get all deliveries by delivery person ID

router.get('/status/:status', getDeliveriesByStatus);  // Get all deliveries by status

router.post('/assign', assignDeliveryPerson);          // Assign a delivery person to an order

router.patch('/:id/status', updateDeliveryStatus);     // Update delivery status

export default router;