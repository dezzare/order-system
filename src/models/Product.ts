import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
})

const Product = mongoose.model('product', ProductSchema);

export { Product }
