import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, message, avatar } = await request.json();

  if (!name || !message || !avatar) {
    return new NextResponse("Please provide all the required fields.", {
      status: 400,
    });
  }

  const newMessage = await db.visitorMessage.create({
    data: {
      name,
      message,
      avatar,
    },
  });

  return NextResponse.json(newMessage);
}
