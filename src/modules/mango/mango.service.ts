import Mango from "./mango.model";
import { IMango } from "./mango.interface";

const createMangoIntoDB = async (payload: IMango) => {
  const data = await Mango.create(payload);

  return data;
};

const getMangoByIdFromDB = async (payload: string) => {
  const data = await Mango.findById(payload);

  return data;
};

const getAllMangoFromDB = async () => {
  const data = await Mango.find();

  return data;
};

const updateMangoByIdFromDB = async (mangoId: string, payload: any) => {
  const data = await Mango.findByIdAndUpdate(mangoId, payload, {
    new: true,
    runValidators: true,
  });

  return data;
};
const deleteMangoByIdFromDB = async (mangoId: string) => {
  const data = await Mango.findByIdAndDelete(mangoId);

  return data;
};

export const MangoService = {
  createMangoIntoDB,
  getAllMangoFromDB,
  getMangoByIdFromDB,
  updateMangoByIdFromDB,
  deleteMangoByIdFromDB,
};
