import express, { Request, Response, NextFunction } from 'express';
// import { CreateFood, GetFoodById, GetAllFoods, DeleteFoodById, GetAllOpenOrders } from '../controllers'
import { CreateFood, GetAllFoods } from '../controllers';

const router = express.Router();


router.post('/food', CreateFood);
// TODO
// router.delete('/food/:id', DeleteFoodById);
// router.post('/table', CreateTable)
// router.delete('/table/:id', DeleteTableById)
// router.post('/customer', CreateCustomer)
// router.delete('/customer/:id', DeleteCustomerById)

// MOVE TO FOOD
// router.get('/food/:id', GetFoodById);
router.get('/foods', GetAllFoods);


// router.get('/tables', GetAllTables);
// router.get('/table/:id', GetOrdersFromTableId);
// router.get('/status/open', GetAllOpenOrders);

// router.delete('/order/:id')

export { router as AdminRoute };

