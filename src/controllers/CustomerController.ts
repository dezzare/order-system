import { Request, Response } from 'express';
import { Customer, Food, Order } from '../models';}


export const GetCustomerProfile = async (req: Request, res: Response) => {
  const customer = req.params;

  if (customer) {
    const profile = await Customer.findById(customer._id);
    if (profile) {
      return res.status(201).json(profile);
    }
  }
  return res.status(400).json({ message: 'Erro ao buscar pelo Id' });
}

export const AddToCart = async (req: Request, res: Response) => {
  const customer = req.params;

  if (customer) {
    const profile = await Customer.findById(customer._id);
    let cartItems = Array();

    const { _id, unit } = req.body;
    const food = await Food.findById(_id);

    if (food) {
      if (profile != null) {
        cartItems = profile.cart;
        if (cartItems.length > 0) {
          let existFoodItems = cartItems.filter((item) => item.food._id.toString() === _id);
          if (existFoodItems.length > 0) {
            const index = cartItems.indexOf(existFoodItems[0]);
            if (unit > 0) {
              cartItems[index] = { food, unit };
            } else {
              cartItems.splice(index, 1);
            }

          } else {
            cartItems.push({ food, unit })
          }

        } else {
          cartItems.push({ food, unit });
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

export const GetCart = async (req: Request, res: Response) => {
  const customer = req.params;

  if (customer) {
    const profile = await Customer.findById(customer._id);
    if (profile) {
      return res.status(200).json(profile.cart);
    }
  }
  return res.status(400).json({ message: 'Cart is Empty!' })
}

export const DeleteCart = async (req: Request, res: Response) => {
  const customer = req.params;

  if (customer) {
    const profile = await Customer.findById(customer._id).populate('cart.food').exec();
    if (profile != null) {
      profile.cart = [] as any;
      const cartResult = await profile.save();
      return res.status(200).json(cartResult);
    }
  }
  return res.status(400).json({ message: 'cart is Already Empty!' })
}


export const AddCartToOrders = async (req: Request, res: Response) => {
  const customer = req.params;
  const { amount, items } = req.body;

  if (customer) {
    const profile = await Customer.findById(customer._id);
    const orderId = `${Math.floor(Math.random() * 89999) + 1000}`;
    const cart = req.body;
    let cartItems = Array();
    let netAmount = 0.0;
    const foods = await Food.find().where('_id').in(cart.map(item => item._id)).exec();

    foods.map(food => {
      cart.map(({ _id, unit }) => {
        if (food._id == _id) {
          netAmount += (food.price * unit);
          cartItems.push({ food, unit })
        }
      })
    })

    if (cartItems) {
      const currentOrder = await Order.create({
        orderId: orderId,
        items: cartItems,
        totalAmount: netAmount,
        paidAmount: amount,
        orderDate: new Date(),
        orderStatus: 'Esperando Confirmação',
        remarks: '',
      })

      profile.cart = [] as any;
      profile.orders.push(currentOrder);
      currentOrder.orderId = orderId;
      currentOrder.status = 'Confirmado'

      await currentTransaction.save();

      const profileResponse = await profile.save();

      return res.status(200).json(profileResponse);

    }

  }

  return res.status(400).json({ msg: 'Error while Creating Order' });
}
// }


// export const GetOrders = async (req: Request, res: Response) => {
//   const customer = req.user;
//   if (customer) {
//     const profile = await Customer.findById(customer._id).populate("orders");
//     if (profile) {
//       return res.status(200).json(profile.orders);
//     }
//   }
//   return res.status(400).json({ messsage: 'Nenhum pedido encontrado' });
// }

// export const GetOrderById = async (req: Request, res: Response) => {
//   const orderId = req.params.id;
//   if (orderId) {
//     const order = await Customer.findById(orderId).populate("items.food");
//     if (order) {
//       return res.status(200).json(order);
//     }
//   }
//   return res.status(400).json({ messsage: 'Pedido não encontrado' });
// }
