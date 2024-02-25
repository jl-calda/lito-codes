import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const messages = await db.visitorMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!messages) return null;
    return NextResponse.json(messages);
  } catch {
    return null;
  }
}
