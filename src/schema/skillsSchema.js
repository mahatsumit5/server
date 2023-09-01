import mongoose from "mongoose";
const skillSchema = mongoose.Schema({
  skill: [
    {
      type: String,
    },
  ],
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});
export default mongoose.model("skills", skillSchema);
