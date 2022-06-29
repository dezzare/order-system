import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new Schema({
  id: { type: String, required: true },
  cart: [{
    product: { type: Schema.Types.ObjectId, ref: 'product' },
    unit: { type: Number }
  }],
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'order',
    required: true
  },],


}, { timestamps: true })

const Customer = mongoose.model('customer', CustomerSchema);

export { Customer }



