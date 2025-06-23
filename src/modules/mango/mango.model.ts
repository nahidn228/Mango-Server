import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema<IMango>(
  {
    name: { type: String, trim: true, required: true },
    variety: { type: String, trim: true, required: true },
    unit: {
      type: String,
      enum: {
        values: ["kg", "pound"],
        default: "kg",
      },
      required: true,
    },
    price: { type: String, required: true, min: 0 },
    stock: { type: Number, min: 0, required: true },
    origin: { type: String, default: "unknown" },
    season: {
      type: String,
      enum: {
        values: ["fall", "summer", "winter"],
        message: "{VALUE} is not acceptable",
      },
      required: true,
    },
  },
  { timestamps: true }
);

const Mango = model<IMango>("mango", mangoSchema);

export default Mango;
