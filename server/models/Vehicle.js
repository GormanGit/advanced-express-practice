import mongoose from "mongoose";

const schema = new mongoose.Schema({
  year: {
    required: true,
    type: Number
  },
  make: {
    required: true,
    type: String
  },
  model: {
    required: true,
    type: String
  }
});

export default mongoose.model("Vehicles", schema);