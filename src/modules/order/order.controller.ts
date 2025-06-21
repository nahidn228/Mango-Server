import { Request, Response } from "express";
import Order from "./order.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const order = await Order.create(data);
    res.send({
      success: false,
      message: "order placed successful",
      order,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "order place Unsuccessful",
      error,
    });
  }
};
const gateOrders = async (req: Request, res: Response) => {
  try {
    const order = await Order.find();
    res.send({
      success: false,
      message: "order getting successful",
      order,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "order getting Unsuccessful",
      error,
    });
  }
};

export const orderController = {
  createOrder,
  gateOrders,
};
