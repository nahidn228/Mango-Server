import { Types } from "mongoose";

export interface IOrder {
  user: Types.ObjectId;
  mango: Types.ObjectId;
  quantity: number;
  totalPrice: number;
  status: string;
  address: {
    zipCode: string;
    street: string;
    state: string;
    country: string;
  };
}
