import { Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderModel = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId },
  mango: { type: Schema.Types.ObjectId },
  quantity: { type: Number, min: 0, required: true },
  totalPrice: { type: Number, min: 0, required: true },
  address: {
    zipCode: { type: String, required: true },
    street: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  status: { type: String, required: true },
});
