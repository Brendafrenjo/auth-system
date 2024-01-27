import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  cityname: {
    type: String,
    required: [true, "Please provide a city name"],
    trim: true,
    unique: true,
  },
  cityemail: {
    type: String,
    required: [true, "Please provide a city name"],
    trim: true,
    unique: true,
  },
  citypassword: {
    type: String,
    required: [true, "Please provide a city name"],
    trim: true,
    unique: true,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
});

const Event = mongoose.models.events || mongoose.model("Event", eventSchema);

export default Event;
