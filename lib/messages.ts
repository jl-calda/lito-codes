import { db } from "@/lib/db";

export const messages = async () => {
  try {
    const messages = await db.visitorMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return messages;
  } catch {
    return null;
  }
};
