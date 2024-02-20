import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const messages = await db.visitorMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json(messages);
}
