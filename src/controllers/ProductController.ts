import { Request, Response } from "express";
import { Product } from '../models';

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find();

  if (products !== null) {
    return res.json(products)
  } else {
    return res.status(400).json({ message: 'Nenhum prato disponível' });
  }
}

export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (product !== null) {
    return res.json(product)
  } else {
    return res.json({ message: 'Prato não encontrado' })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;

  const createdProduct = await Product.create({
    name: name,
    price: price,
  })
  return res.json(createdProduct);
}
