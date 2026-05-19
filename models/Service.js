import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);