"use server";

import { db } from "@/lib/db";
import { VisitorMessageSchema } from "@/schemas/contact-message";
import * as z from "zod";
import { revalidatePath } from "next/cache";

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

    revalidatePath("/");

    return {
      success: "Message sent! Thank you!",
    };
  } catch {
    return { error: "An error occurred" };
  }
};
