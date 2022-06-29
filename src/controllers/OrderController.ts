import { Request, Response } from 'express';
import { Order } from '../models';

export const getOrders = async (req: Request, res: Response) => {
  const order = await Order.find();

  if (order !== null) {
    return res.json(order)
  } else {
    return res.status(400).json({ message: 'Nenhum pedido encontrado' });
  }
}

export const getOrderById = async (req: Request, res: Response) => {
  console.log('placeholder')

}

// TODO
// export const UpdateOrderStatus = async (req: Request, res: Response) => { }
// export const GetAllOpenOrders = async (req: Request, res: Response) => { }


