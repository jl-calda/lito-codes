import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/types";

import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  const messages = await db.visitorMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  res.socket.server.io.emit("messages", messages);

  return res.status(200).json(messages);
}
