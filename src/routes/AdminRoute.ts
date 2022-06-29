import express, { Request, Response, NextFunction } from 'express';
// import { CreateFood, GetFoodById, GetAllFoods, DeleteFoodById, GetAllOpenOrders } from '../controllers'

const router = express.Router();


// TODO
// router.delete('/food/:id', DeleteFoodById);
// router.post('/table', CreateTable)
// router.delete('/table/:id', DeleteTableById)
// router.post('/customer', CreateCustomer)
// router.delete('/customer/:id', DeleteCustomerById)

// router.delete('/order/:id')

export { router as AdminRoute };

