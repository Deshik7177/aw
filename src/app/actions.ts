"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  // In a real application, you would send an email, save to a database, etc.
  console.log("New contact form submission:", parsed.data);

  return { success: true };
}
