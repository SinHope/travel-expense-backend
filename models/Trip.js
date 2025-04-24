import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  destination: String,
  date: String,
  budget: Number,
});

const Trip = mongoose.model("Trip", tripSchema);
export default Trip;
