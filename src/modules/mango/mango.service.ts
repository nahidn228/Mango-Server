import { Request, Response } from "express";
import Mango from "./mango.model";
import { IMango } from "./mango.interface";

const createMangoIntoDB = async (payload: IMango) => {
  const data = await Mango.create(payload);

  return data;
};

export const MangoService = {
  createMangoIntoDB,
};
