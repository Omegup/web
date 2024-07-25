import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, email, message, mobilephone } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, message, mobilephone });
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = Object.values(error.errors).map(e => e.message);
      console.error("Validation error:", errorList);

      return NextResponse.json({ msg: errorList, success: false });
    } else {
      console.error("Unexpected error:", error);

      return NextResponse.json({ msg: ["Unable to send message."], success: false });
    }
  }
}
