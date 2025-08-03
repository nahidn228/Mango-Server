import cors from "cors";
import express, { Application, Request, Response } from "express";
import routes from "./modules/routes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Mango is here",
  });
});

export default app;
