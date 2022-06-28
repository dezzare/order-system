import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();


// router.get('/cart', GetCart);
// router.post('/cart', AddToCart);
// router.delete('/cart', DeleteCart);


// // router.get('/orders', GetOrders); // only admin?
// router.get('/order/:id', GetOrderById);
// router.post('/order', CreateOrder);

export { router as CustomerRoute }

