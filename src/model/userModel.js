import userSchema from "../schema/userSchema.js";

export const insertUser = (user) => {
  return userSchema(user).save();
};
