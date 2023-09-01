import mongoose from "mongoose";
const skillSchema = mongoose.Schema(
  {
    skill: [
      {
        type: String,
        unique: true,
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      unique: true,
      index: 1,
    },
  },
  { timeStamps: true }
);
export default mongoose.model("skills", skillSchema);
