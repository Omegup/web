import mongoose, { Schema } from "mongoose";
import { contactRules } from "@/lib/contact";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minlength: [
      contactRules.name.min,
      `Name must be at least ${contactRules.name.min} characters.`,
    ],
    maxlength: [
      contactRules.name.max,
      `Name must be at most ${contactRules.name.max} characters.`,
    ],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [contactRules.email, "Invalid email address."],
  },
  mobilephone: {
    type: String,
    required: [true, "Mobile phone is required."],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required."],
    trim: true,
    minlength: [
      contactRules.message.min,
      `Message must be at least ${contactRules.message.min} characters.`,
    ],
    maxlength: [
      contactRules.message.max,
      `Message must be at most ${contactRules.message.max} characters.`,
    ],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
