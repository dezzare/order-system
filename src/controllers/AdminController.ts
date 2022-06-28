import { Request, Response, NextFunction } from 'express';
import { Customer, Food, Order } from '../models';


export const CreateFood = async (req: Request, res: Response, next: NextFunction) => {
  const { id, name, description, category, price, images } = req.body;

  const createdFood = await Food.create({
    id: id,
    name: name,
    description: description,
    category: category,
    price: price,
    images: [images]
  })
  console.log('Passou por aqui');

  return res.json(createdFood);
}

// export const GetFoodById = async (req: Request, res: Response, next: NextFunction) => {
//   const foodId = req.params.name;
//   const food = await Food.find(foodId);

//   if (food !== null) {
//     return res.json(food)
//   }

//   return res.json({ "message": "Prato não encontrado" })

// }

// export const GetAllFoods = async (req: Request, res: Response, next: NextFunction) => {
//   const foods = await Food.find();

//   if (foods !== null) {
//     return res.json(foods)
//   }

//   return res.json({ "message": "Nenhum prato cadastrado" })
// }

// export const DeleteFoodById = async (req: Request, res: Response, next: NextFunction) => {
//   const foodId = req.params._id;
//   if (foodId) {
//     const foodRecord = await Food.findById(foodId)
//     const food = await Food.deleteOne({ _id: foodId });
//     const deleteResult = await foodRecord.save();
//     return res.status(200).json(deleteResult);
//   }

//   return res.status(400).json({ message: 'Não há usuários com este ID' })
// }

// export const GetAllTables = async (req: Request, res: Response, next: NextFunction) => {
//   const tables = await Tables.find();

//   if (tables !== null) {
//     return res.json(tables)
//   }

//   return res.json({ "message": "Nenhuma mesa encontrada" })
// }

// export const GetAllOpenOrders = async (req: Request, res: Response, next: NextFunction) => {
//   const foods = await Order.find('open');

//   if (foods !== null) {
//     return res.json(foods)
//   }

//   return res.json({ "message": "Nenhum prato cadastrado" })
// }








