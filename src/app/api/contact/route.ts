import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { parseContact } from "@/lib/contact";
import { connectDB } from "@/lib/db";
import Contact from "@/models/contact";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, msg: ["Invalid JSON."] },
      { status: 400 },
    );
  }

  const parsed = parseContact(body);
  if ("errors" in parsed) {
    return NextResponse.json(
      { success: false, msg: parsed.errors },
      { status: 400 },
    );
  }

  try {
    await connectDB();
    await Contact.create(parsed.data);
    return NextResponse.json(
      { success: true, msg: ["Message sent successfully."] },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const msg = Object.values(error.errors).map((item) => item.message);
      return NextResponse.json({ success: false, msg }, { status: 400 });
    }

    console.error(error);
    const missingDatabase =
      error instanceof Error && error.message === "MONGODB_URI is not set";
    return NextResponse.json(
      {
        success: false,
        msg: [
          missingDatabase
            ? "The studio inbox is not configured yet."
            : "Unable to send message.",
        ],
      },
      { status: missingDatabase ? 503 : 500 },
    );
  }
}
