import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const messages = await db.visitorMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!messages)
      return NextResponse.json({ error: "No messages found" }, { status: 404 });

    return NextResponse.json(
      {
        success: {
          data: messages,
          message: "Messages fetched successfully",
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
