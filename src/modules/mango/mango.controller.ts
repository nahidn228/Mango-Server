import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = (req: Request, res: Response) => {
  const data = Mango.create(req.body);

  res.send({
    success: true,
    message: "Mango Created successfully",
    data,
  });
};

export const mangoController = {
  createMango,
};
