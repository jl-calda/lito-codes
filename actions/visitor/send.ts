"use server";

import { db } from "@/lib/db";
import { VisitorMessageSchema } from "@/schemas/contact-message";
import * as z from "zod";
import { revalidateTag } from "next/cache";

export const send = async (data: z.infer<typeof VisitorMessageSchema>) => {
  const validatedFields = VisitorMessageSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid data" };
  }

  try {
    const message = await db.visitorMessage.create({
      data: {
        ...data,
      },
    });

    // revalidateTag("visitor-message");

    return {
      success: "Message sent! Thank you!",
    };
  } catch {
    return { error: "An error occurred" };
  }
};
