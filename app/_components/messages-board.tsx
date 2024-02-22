"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { FaStackExchange } from "react-icons/fa6";

import { CardTitle } from "@/components/card-title";
import { Card, CardContent } from "@/components/ui/card";
import { VisitorMessage } from "@prisma/client";

import { useSocket } from "@/components/providers/socket-provider";
import axios from "axios";
import { ChatPill } from "./chat-pill";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CardBanner } from "@/components/card-banner";
import { m } from "framer-motion";

export const MessagesBoard = () => {
  const [messages, setMessages] = useState<VisitorMessage[] | null>(null);
  const { socket } = useSocket();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios.get("/api/socket/messages").then((res) => {
      setMessages(res.data);
    });
  }, [socket]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (socket) {
      socket.on("new-message", (msg: VisitorMessage) => {
        setMessages((prev) => [msg, ...(prev || [])]);
      });
    }

    return () => {
      if (socket) {
        socket.off("new-message");
      }
    };
  }, [socket]);

  return (
    <Card className="w-fit relative">
      <CardTitle
        icon={FaStackExchange}
        title="Visitors' Message Board"
        subtitle="All messages from visitors"
      />
      <CardContent>
        <ScrollArea className=" w-96 h-[50vh]">
          <div className="flex flex-col-reverse gap-y-2">
            {messages?.map((msg: VisitorMessage) => (
              <Fragment key={crypto.randomUUID()}>
                <ChatPill data={msg} />
              </Fragment>
            ))}
          </div>
          <div ref={scrollRef} />
        </ScrollArea>
      </CardContent>
      <CardBanner text={`${!messages ? "counting" : messages.length} msgs`} />
    </Card>
  );
};
