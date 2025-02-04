import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT ?? 3003,
    customerServiceUrl: process.env.CUSTOMER_SERVICE_URL || 'http://localhost:3000',
    orderServiceUrl: process.env.ORDERS_SERVICE_URL || 'http://localhost:3002',
    kitchenServiceUrl: process.env.KITCHEN_SERVICE_URL || 'http://localhost:3001',
    deliveryServiceUrl: process.env.DELIVERY_SERVICE_URL || 'http://localhost:3003',
};