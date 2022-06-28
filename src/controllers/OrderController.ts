import express, { Request, Response } from 'express';
import { FoodDoc, Food, Order } from '../models';

export const GetAllFoods = async (req: Request, res: Response) => {
  const foods = await Food.find();

  if (foods !== null) {
    return res.json(foods)
  } else {
    return res.status(400).json({ message: 'Nenhum prato disponível' });
  }
}

export const GetFoodById = async (req: Request, res: Response) => {
  const foodId = req.params.id;
  const food = await Food.find(foodId);

  if (food !== null) {
    return res.json(food)
  } else {
    return res.json({ message: 'Prato não encontrado' })
  }
}

export const GetOrders = async (req: Request, res: Response) => {
  const order = await Order.find();

  if (order !== null) {
    return res.json(order)
  } else {
    return res.status(400).json({ message: 'Nenhum pedido encontrado' });
  }
}

export const GetFoodById = async (req: Request, res: Response) => {
  const orderId = req.params.id;
  const order = await Order.find(orderId);

  if (order !== null) {
    return res.json(order)
  } else {
    return res.json({ message: 'Pedido não encontrado' })
  }
}

// TODO
// export const UpdateOrderStatus = async (req: Request, res: Response) => { }
// export const GetAllOpenOrders = async (req: Request, res: Response) => { }


