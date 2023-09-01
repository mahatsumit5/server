import userSchema from "../schema/userSchema.js";

export const insertUser = (user) => {
  return userSchema(user).save();
};
export const findUSerById = (userID) => {
  return userSchema.findById(userID);
};
