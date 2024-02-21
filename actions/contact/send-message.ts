"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { ContactMessage } from "@/schemas/contact-message";

export const sendMessage = async (data: z.infer<typeof ContactMessage>) => {
  const validatedFields = ContactMessage.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  try {
    const { name, email, message } = validatedFields.data;

    await db.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });

    return {
      success: "Message sent!",
    };
  } catch {
    return {
      error: "Something went wrong!",
    };
  }
};
