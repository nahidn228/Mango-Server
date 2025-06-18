import { model, Schema } from "mongoose";

const userSchema = new Schema<IUser>({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  password: { type: String },
  role: {
    type: String,
    enum: ["customer", "admin"],
  },
});

const User = model<IUser>("User", userSchema);

export default User;
