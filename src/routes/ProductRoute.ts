import express from 'express';
import { getAllProducts, getProductById, createProduct } from '../controllers'

const router = express.Router();

router.get('/search', getAllProducts);
router.get('/search/:id', getProductById);


router.post('/new', createProduct);
// router.delete('/delete/:id', deleteProduct);

export { router as ProductRoute };


