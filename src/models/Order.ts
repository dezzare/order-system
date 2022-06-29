import mongoose, { Schema, Document, Model } from 'mongoose';


export interface OrderDoc extends Document {
  orderId: string;
  items: [any];
  totalAmount: number;
  orderDate: Date;
  customerId: string;
  // orderStatus: string;
  // customerTable: number;
}

const OrderSchema = new Schema({
  orderId: { type: String, require: true },
  items: [{
    food: { type: Schema.Types.ObjectId, ref: "food", require: true },
    unit: { type: Number, require: true }
  }],
  totalAmount: { type: Number, require: true },
  orderDate: { type: Date },
  orderStatus: { type: String },
  customerId: { type: String, required: true },
  customerTable: { type: Number }
}, { timestamps: true });

const Order = mongoose.model<OrderDoc>('order', OrderSchema);

export { Order }
