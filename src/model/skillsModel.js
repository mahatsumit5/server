import skillsSchema from "../schema/skillsSchema.js";

export const addSkills = (obj) => {
  return skillsSchema(obj).save();
};
export const findByUserId = (user) => {
  return skillsSchema.findOne(user);
};
export const updateSkills = ({ _id, obj }) => {
  console.log(obj);
  return skillsSchema.findByIdAndUpdate(_id, obj, { new: true });
};

export const getSkills = () => {
  return skillsSchema.find();
};
