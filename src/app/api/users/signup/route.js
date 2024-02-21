"use server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    //additional validation
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Please fill out all relevant fields" },
        { status: 400 }
      );
    }

    //check if user alreday exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "user alreday exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    console.error("Error parsing requst body:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
