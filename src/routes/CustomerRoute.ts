import express from 'express';
import { getCart, addToCart, deleteCart, addCartToOrders } from '../controllers';


const router = express.Router();


router.get('/cart', getCart);
router.post('/cart', addToCart);
router.delete('/cart', deleteCart);

router.post('/order', addCartToOrders);

export { router as CustomerRoute }

