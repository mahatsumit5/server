import express from "express";
import { insertUser } from "../model/userModel.js";
import { hashPassword } from "../utils/bcrypt.js";
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    req.body.password = hashPassword(req.body.password);
    const user = await insertUser(req.body);
    user?._id
      ? res.json({
          status: 201,
          message: "success",
        })
      : res.status(409).send("failed");
  } catch (error) {
    console.log("err", error);
  }
});

export default router;
