import mongoose, { Schema, Document, Model } from 'mongoose';
import { OrderDoc } from './Order';

interface CustomerDoc extends Document {
  id: string;
  cart: [any];
  orders: [OrderDoc];
}

const CustomerSchema = new Schema({
  id: { type: String, required: true },
  cart: [{
    food: { type: Schema.Types.ObjectId, ref: 'food' },
    unit: { type: Number }
  }],
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'order'
  }],


}, { timestamps: true });

const Customer = mongoose.model<CustomerDoc>('customer', CustomerSchema);

export { Customer }



