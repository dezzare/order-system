import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema({
  orderId: { type: String, require: true },
  items: [{
    food: { type: Schema.Types.ObjectId, ref: "product" },
    unit: { type: Number }
  }],
  totalAmount: { type: Number },
  customerId: { type: String },
}, { timestamps: true });

const Order = mongoose.model('order', OrderSchema);

export { Order }
