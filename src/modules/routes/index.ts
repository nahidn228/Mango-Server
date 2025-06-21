import { Router } from "express";
import userRouts from "../user/user.routs";
import mangoRoutes from "../mango/mango.routes";
import orderRoute from "../order/order.routes";

const routes = Router();

routes.use("/user", userRouts);
routes.use("/mango", mangoRoutes);
routes.use("/order", orderRoute);

export default routes;
