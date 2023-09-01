import express from "express";
import { addSkills, findByUserId, updateSkills } from "../model/skillsModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { user } = req.body;
    console.log(user);
    const { _id, skill } = await findByUserId({ user });
    console.log(_id);
    if (_id) {
      const obj = [...skill, req.body.skill];

      const result = await updateSkills({ _id, obj });
      result?._id
        ? res.json({
            message: `new poseted`,
          })
        : res.status(409).send("error");
      return;
    }
    const result = await addSkills(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "skills posted",
        })
      : res.json({
          status: "error",
          message: "Unable to post skills",
        });
  } catch (error) {
    console.log(error);
  }
});
export default router;
