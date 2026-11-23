export const contactRules = {
  email: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
  phone: /^[+()\d][\d\s().-]{5,19}$/,
  name: { min: 2, max: 50 },
  message: { min: 10, max: 2000 },
} as const;

export type ContactInput = {
  fullname: string;
  email: string;
  mobilephone: string;
  message: string;
};

export function parseContact(
  body: unknown,
): { data: ContactInput } | { errors: string[] } {
  if (!body || typeof body !== "object") {
    return { errors: ["Invalid request."] };
  }

  const raw = body as Record<string, unknown>;
  const fullname = String(raw.fullname ?? "").trim();
  const email = String(raw.email ?? "").trim();
  const mobilephone = String(raw.mobilephone ?? "").trim();
  const message = String(raw.message ?? "").trim();
  const errors: string[] = [];

  if (
    fullname.length < contactRules.name.min ||
    fullname.length > contactRules.name.max
  ) {
    errors.push(
      `Name must be between ${contactRules.name.min} and ${contactRules.name.max} characters.`,
    );
  }
  if (!contactRules.email.test(email)) {
    errors.push("Invalid email address.");
  }
  if (!contactRules.phone.test(mobilephone)) {
    errors.push("Enter a valid phone number.");
  }
  if (
    message.length < contactRules.message.min ||
    message.length > contactRules.message.max
  ) {
    errors.push(
      `Message must be between ${contactRules.message.min} and ${contactRules.message.max} characters.`,
    );
  }

  if (errors.length > 0) return { errors };
  return { data: { fullname, email, mobilephone, message } };
}
