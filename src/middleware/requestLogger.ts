import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import logger from '../utils/logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    req.headers['request-id'] = uuidv4();
    logger.info(`Incoming request ${req.method} ${req.url} - Request ID: ${req.headers['request-id']}`);
    next();
};