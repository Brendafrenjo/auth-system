import { connect } from "@/dbConfig/dbConfig";
import Event from "@/models/eventModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.jscon();
    const { cityname, cityemail, citypassword } = reqBody;

    //check if event exists
    const event = await Event.findOne({ cityemail });

    if (event) {
      return NextResponse.json(
        { error: "Event already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcrypt.hash(citypassword, salt);

    const newEvent = new Event({
      cityname,
      cityemail,
      citypassword: hashPassword,
    });

    const eventSaved = await newEvent.save();

    return NextResponse.json({
      message: "Event created succesfully",
      success: true,
      eventSaved,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
