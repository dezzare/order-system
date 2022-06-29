import { Request, Response } from 'express';
import { Order, Product, Customer } from '../models';

export const getOrders = async (req: Request, res: Response) => {
  const order = await Order.find();

  if (order !== null) {
    return res.json(order)
  } else {
    return res.status(400).json({ message: 'Nenhum pedido encontrado' });
  }
}

export const getOrderById = async (req: Request, res: Response) => {
  const orderId = req.params.id;
  const order = await Order.findById(orderId);

  if (order !== null) {
    return res.json(order)
  } else {
    return res.json({ message: 'Prato não encontrado' })
  }
}

export const addCartToOrders = async (req: Request, res: Response) => {
  const customer = req.body;

  if (customer) {
    const profile = await Customer.findById(customer._id);
    const orderId = `${Math.floor(Math.random() * 89999) + 1000}`;
    const cart = req.body.cart;
    let cartItems: any = [];
    let netAmount = 0.0;
    const products = await Product.find().where('_id').in(cart.map((item: any) => item._id)).exec();

    products.map(product => {
      cart.map((_id: any, unit: number) => {
        if (product._id == _id) {
          netAmount += (product.price * unit);
          cartItems.push({ product, unit })
        }
      })
    })

    if (cartItems) {
      const currentOrder = await Order.create({
        orderId: orderId,
        items: cartItems,
        totalAmount: netAmount,
        customerId: profile
      })

      if (profile != null) {
        profile.orders?.push(currentOrder);
        profile.cart = [] as any;

        await currentOrder.save();

        const profileResponse = await profile.save();

        return res.status(200).json(profileResponse);
      }
    }

  }

  return res.status(400).json({ msg: 'Error while Creating Order' });
}


// TODO
// export const UpdateOrderStatus = async (req: Request, res: Response) => { }
// export const GetAllOpenOrders = async (req: Request, res: Response) => { }


