import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please provide a first name"],
    unique: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "Please provide a last name"],
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.users || mongoose.model("User", userSchema);

export default User;