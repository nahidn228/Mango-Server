import { Router } from "express";
import { mangoController } from "./mango.controller";

const mangoRoutes = Router();

mangoRoutes.post("/", mangoController.createMango);
mangoRoutes.get("/:mangoId", mangoController.getMangoById);
mangoRoutes.patch("/:mangoId", mangoController.updateMango);
mangoRoutes.delete("/:mangoId", mangoController.deleteMango);

mangoRoutes.get("/", mangoController.getMango);

export default mangoRoutes;
