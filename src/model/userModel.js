import userSchema from "./userSchema.js";

export const insertUser = (user) => {
  return userSchema(user).save();
};
