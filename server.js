import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

import { connectToDatabase } from "./src/connect/connect.js";
connectToDatabase();
import userRouter from "./src/router/userRouter.js";
app.use("/api/v1/user", userRouter);
import skillsRouter from "./src/router/skillsRouter.js";
import extractRouter from "./src/router/extractRouter.js";
app.use("/api/v1/skill", skillsRouter);
app.use("/api/v1/extract", extractRouter);
app.get("/", (req, res) => {
  res.json({ status: "success", message: "server is running" });
});

app.listen(PORT, (error) => {
  console.log(`Your server is running on port http://localhost:${PORT}`);
});
