import mongoose, { Schema, Document, Model } from 'mongoose';


export interface OrderDoc extends Document {
  orderId: string;
  items: [any];
  totalAmount: number;
  orderDate: Date;
  orderStatus: string;
}

const OrderSchema = new Schema({
  orderId: { type: String, require: true },
  items: [{
    food: { type: Schema.Types.ObjectId, ref: "food", require: true },
    unit: { type: Number, require: true }
  }],
  totalAmount: { type: Number, require: true },
  orderDate: { type: Date },
  orderStatus: { type: String }
}, { timestamps: true });

const Order = mongoose.model<OrderDoc>('order', OrderSchema);

export { Order }