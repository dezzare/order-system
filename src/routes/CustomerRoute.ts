import express from 'express';
import { getCart, addToCart, deleteCart, createOrder } from '../controllers';


const router = express.Router();


router.get('/cart', getCart);
router.post('/cart', addToCart);
router.delete('/cart', deleteCart);

router.post('/order', createOrder);

export { router as CustomerRoute }

