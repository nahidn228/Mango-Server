import { Router } from "express";
import { getUsers, registerUser } from "./user.controller";

const userRouts = Router();

userRouts.post("/user", registerUser);
userRouts.get("/user", getUsers);

export default userRouts;
