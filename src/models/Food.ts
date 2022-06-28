import mongoose, { Schema, Document, Model } from "mongoose";

export interface FoodDoc extends Document {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  images: [string];
}

const FoodSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  price: { type: Number },
  images: { type: [String] }
}, { timestamps: true })


const Food = mongoose.model<FoodDoc>('food', FoodSchema);

export { Food }
