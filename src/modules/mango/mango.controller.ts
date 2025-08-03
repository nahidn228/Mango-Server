import { Request, Response } from "express";
import Mango from "./mango.model";
import { MangoService } from "./mango.service";

const createMango = async (req: Request, res: Response) => {
  try {
    const data = await MangoService.createMangoIntoDB(req.body);

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
    const mango = await MangoService.getAllMangoFromDB();
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
    const mango = await MangoService.getMangoByIdFromDB(mangoId);
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
    const mango = await MangoService.updateMangoByIdFromDB(mangoId, req.body)
    res.send({
      success: true,
      message: "Mango i updated successfully",
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
  deleteMango,
};
