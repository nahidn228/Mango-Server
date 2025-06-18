import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
const app = express();

app.use(cors());
app.use(express.json());

app.listen(config.port, () => {
  console.log("✅ server running");
});

async function server() {
  try {
    await mongoose.connect();
    console.log(`✅ server is running on port ${config.port}`);
  } catch (error: any) {
    console.log(`server error: ${error.message}`);
  }
}
server();
