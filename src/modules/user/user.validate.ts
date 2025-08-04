import z from "zod";
import { UserRole } from "./user.constrain";

const UserCreateZodSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be minimum 3 character")
    .max(255, "Name must be maximum 255 character"),
  email: z.email({ error: "please enter a valid email" }),

  phone: z.string(),
  password: z.string(),
  role: z.enum(UserRole),
});

export const UserZodSchema = {
  UserCreateZodSchema,
};
