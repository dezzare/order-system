import express from 'express';
import { getOrders, getOrderById } from '../controllers'

const router = express.Router();

router.get('/orders', getOrders);
router.get('/order/:id', getOrderById);

// TODO
// router.put('/status/update', UpdateOrderStatus);
// router.get('/status/open', GetAllOpenOrders);

export { router as OrderRoute }



