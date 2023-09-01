import express from "express";
import { addSkills, findByFilter, updateSkills } from "../model/skillsModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { user } = req.body;
    console.log(typeof user);
    const { _id, skill } = await findByFilter({ user });
    console.log(skill);
    if (_id) {
      const obj = [...skill, req.body.skill];
      const result = await updateSkills(_id, obj);
      result?._id
        ? res.json({
            message: `ANew skill had been added`,
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
    res.json({
      status: "error",
      message: "Error occured",
    });
  }
});

router.get("/:user", async (req, res, next) => {
  try {
    // console.log(req.params);
    const { user } = req.params;
    console.log(typeof user);
    const data = await findByFilter({ user });
    console.log(data);
    data?._id
      ? res.json({
          message: "Skills found",
          data,
        })
      : res.json({ message: "no record" });
  } catch (error) {
    res.json({
      status: "error",
      message: error,
    });
  }
});
export default router;
