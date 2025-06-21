import { Router } from "express";
import userRouts from "../user/user.routs";
import mangoRoutes from "../mango/mango.routes";

const routes = Router();

routes.use("/user", userRouts);
routes.use("/mango", mangoRoutes);

export default routes;
