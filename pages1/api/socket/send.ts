import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/types";

import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed. Please use POST method to send a message.",
    });
  }

  try {
    const { message, name, avatar } = req.body;

    if (!message || !name || !avatar) {
      return res.status(400).json({
        error: "Please provide all the required fields.",
      });
    }

    const newMessage = await db.visitorMessage.create({
      data: {
        message,
        name,
        avatar,
      },
    });

    res.socket.server.io.emit("new-message", newMessage);

    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while trying to send the message.",
    });
  }
}
