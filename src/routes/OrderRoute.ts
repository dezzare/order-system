import express, { Request, Response } from 'express';
import { OrderController } from '../controllers'

const router = express.Router();

router.get('/foods', GetAllFoods);
router.get('/food/:id', GetFoodById);

router.get('/orders', GetOrders);
router.get('/order/:id', GetOrderById);

// TODO
// router.put('/status/update', UpdateOrderStatus);
// router.get('/status/open', GetAllOpenOrders);

export { router as OrderRoute }



