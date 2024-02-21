"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { VisitorMessage } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export const MessagesBoardClient = () => {
  const [messages, setMessages] = useState<VisitorMessage[] | null>(null);
  const { isConnected, socket } = useSocket();

  useEffect(() => {
    axios.get("/api/messages").then((res) => setMessages(res.data));
  }, []);

  useEffect(() => {
    if (isConnected) {
      socket.on("message", (newMessage: VisitorMessage) => {
        setMessages((prevMessages) => [newMessage, ...(prevMessages || [])]);
      });
    }
  }, [isConnected, socket]);

  return (
    <>
      <div className="flex flex-col-reverse">
        {messages?.map((msg: VisitorMessage) => (
          <div key={crypto.randomUUID()}>{msg.message}</div>
        ))}
      </div>
    </>
  );
};
