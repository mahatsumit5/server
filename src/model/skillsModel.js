import skillsSchema from "../schema/skillsSchema.js";

export const addSkills = (obj) => {
  return skillsSchema(obj).save();
};
export const findByFilter = ({ user }) => {
  console.log(user);
  return skillsSchema.findOne({ user });
};
export const getSkillsByUser = (_id) => {
  return skillsSchema.findById(_id);
};

export const updateSkills = (_id, obj) => {
  return skillsSchema.findByIdAndUpdate(_id, { skill: obj }, { new: true });
};
