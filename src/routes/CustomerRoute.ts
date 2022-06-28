import express from 'express';
import { GetCart, AddToCart, DeleteCart, CreateOrder } from '../controllers';


const router = express.Router();


router.get('/cart', GetCart);
router.post('/cart', AddToCart);
router.delete('/cart', DeleteCart);

router.post('/order', CreateOrder);

export { router as CustomerRoute }

