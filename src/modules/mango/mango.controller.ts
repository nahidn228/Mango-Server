import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = async (req: Request, res: Response) => {
  try {
    const data = await Mango.create(req.body);

    res.send({
      success: true,
      message: "Mango Created successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Mango is not Created ",
      error,
    });
  }
};

const getMango = async (req: Request, res: Response) => {
  try {
    const mango = await Mango.find();
    res.send({
      success: true,
      message: "Mango getting successfully",
      mango,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Mango getting Unsuccessful",
      error,
    });
  }
};
const getMangoById = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const mango = await Mango.findById(mangoId);
    res.send({
      success: true,
      message: "Mango getting successfully",
      mango,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Mango getting Unsuccessful",
      error,
    });
  }
};
const updateMango = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const mango = await Mango.findByIdAndUpdate(mangoId, req.body, {
      new: true,
      runValidators: true,
    });
    res.send({
      success: true,
      message: "Mango update successfully",
      mango,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Mango update Unsuccessful",
      error,
    });
  }
};
const deleteMango = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const mango = await Mango.findByIdAndDelete(mangoId);
    res.send({
      success: true,
      message: "Mango deleted successfully",
      mango,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Mango delete Unsuccessful",
      error,
    });
  }
};

export const mangoController = {
  createMango,
  getMango,
  getMangoById,
  updateMango,
  deleteMango
};
