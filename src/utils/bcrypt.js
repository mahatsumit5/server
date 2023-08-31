import bcrypt from "bcrypt";
const saltRounds = 10;
export const hashPassword = (plainPassword) => {
  const salt = bcrypt.genSalt(saltRounds);
  const hash = bcrypt.hashSync(plainPassword, saltRounds);
  console.log(hash);
  return hash;
};
