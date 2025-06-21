import { Router } from "express";
import { mangoController } from "./mango.controller";

const mangoRoutes = Router();

mangoRoutes.post('/', mangoController.createMango)

export default mangoRoutes;
