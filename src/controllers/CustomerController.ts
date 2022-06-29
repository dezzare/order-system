import { Request, Response } from 'express';
import { Customer, Product, Order } from '../models';


export const getCustomerProfile = async (req: Request, res: Response) => {
  const customer = req.body;

  if (customer) {
    const profile = await Customer.findById(customer._id);
    if (profile) {
      return res.status(201).json(profile);
    }
  }
  return res.status(400).json({ message: 'Erro ao buscar pelo Id' });
}

export const addToCart = async (req: Request, res: Response) => {
  const customer = req.body;

  if (customer) {
    const profile = await Customer.findById(customer._id);
    let cartItems: any = [];

    const { _id, unit } = req.body;
    const product = await Product.findById(_id);

    if (product) {
      if (profile != null) {
        cartItems = profile.cart;
        if (cartItems.length > 0) {
          let existProductItems = cartItems.filter((item: any) => item.product._id.toString() === _id);
          if (existProductItems.length > 0) {
            const index = cartItems.indexOf(existProductItems[0]);
            if (unit > 0) {
              cartItems[index] = { product, unit };
            } else {
              cartItems.splice(index, 1);
            }

          } else {
            cartItems.push({ product, unit })
          }

        } else {
          cartItems.push({ product, unit });
        }

        if (cartItems) {
          profile.cart = cartItems as any;
          const cartResult = await profile.save();
          return res.status(200).json(cartResult.cart);
        }

      }
    }

  }
  return res.status(404).json({ msg: 'Unable to add to cart!' });
}

export const getCart = async (req: Request, res: Response) => {
  const customer = req.body;

  if (customer) {
    const profile = await Customer.findById(customer._id);
    if (profile) {
      return res.status(200).json(profile.cart);
    }
  }
  return res.status(400).json({ message: 'Cart is Empty!' })
}

export const deleteCart = async (req: Request, res: Response) => {
  const customer = req.body;

  if (customer) {
    const profile = await Customer.findById(customer._id).populate('cart.product').exec();
    if (profile != null) {
      profile.cart = [] as any;
      const cartResult = await profile.save();
      return res.status(200).json(cartResult);
    }
  }
  return res.status(400).json({ message: 'cart is Already Empty!' })
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
