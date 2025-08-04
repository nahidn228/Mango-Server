import { Router } from "express";
import { getUsers, registerUser } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { UserZodSchema } from "./user.validate";

const userRouts = Router();

userRouts.post(
  "/",
  validateRequest(UserZodSchema.UserCreateZodSchema),
  registerUser
);
userRouts.get("/", getUsers);

export default userRouts;
