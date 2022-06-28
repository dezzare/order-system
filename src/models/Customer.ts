import mongoose, { Schema, Document, Model } from 'mongoose';
import { OrderDoc } from './Order';

interface CustomerDoc extends Document {
  table: number;
  cart: [any];
  orders: [OrderDoc];
  pinCode: number;

}

const CustomerSchema = new Schema({
  table: { type: Number, required: true },
  cart: [{
    food: { type: Schema.Types.ObjectId, ref: 'food' },
    unit: { type: Number }
  }],
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'order'
  }],
  pinCode: { type: Number, required: true }


}, { timestamps: true });

const Customer = mongoose.model<CustomerDoc>('customer', CustomerSchema);

new Customer({
  table: 4,
  cart: [],
  orders: [],
  pinCode: 9898
})


export { Customer }



