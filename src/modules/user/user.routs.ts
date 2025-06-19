import { Router } from "express";
import { registerUser } from "./user.controller";


const userRouts = Router();
userRouts.post('/user', registerUser)

export default userRouts;
