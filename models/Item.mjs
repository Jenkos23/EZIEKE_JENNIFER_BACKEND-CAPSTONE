// item.js
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  designer: { type: String, required: true },
  design_description: {type: String},
  createdAt: { type: Date, default: Date.now }
});


const Item = mongoose.model("Item", itemSchema);

export default Item