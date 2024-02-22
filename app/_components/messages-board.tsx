"use client";

import { Fragment, use, useEffect, useRef, useState } from "react";
import { FaStackExchange } from "react-icons/fa6";

import { CardTitle } from "@/components/card-title";
import { Card, CardContent } from "@/components/ui/card";
import { VisitorMessage } from "@prisma/client";

import { useSocket } from "@/components/providers/socket-provider";
import axios from "axios";
import { ChatPill } from "./chat-pill";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CardBanner } from "@/components/card-banner";
import { cn } from "@/lib/utils";

interface MessagesBoardProps {
  className?: string;
}

export const MessagesBoard = ({ className }: MessagesBoardProps) => {
  const [messages, setMessages] = useState<VisitorMessage[] | null>(null);
  const [newMessage, setNewMessage] = useState(false);
  const { socket } = useSocket();
  const scrollRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios.get("/api/messages").then((res) => {
      setMessages(res.data);
    });
  }, [socket]);

  useEffect(() => {
    if (boardRef.current) {
      boardRef.current.scrollTop =
        boardRef.current.scrollHeight - boardRef.current.clientHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (newMessage) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      setNewMessage(false);
    }
  }, [messages]);

  useEffect(() => {
    if (socket) {
      socket.on("new-message", (msg: VisitorMessage) => {
        setMessages((prev) => [msg, ...(prev || [])]);
        setNewMessage(true);
      });
    }

    return () => {
      if (socket) {
        socket.off("new-message");
      }
    };
  }, [socket]);

  return (
    <Card className={cn(className, "relative")}>
      <CardTitle
        icon={FaStackExchange}
        title="Visitors' Message Board"
        subtitle="All messages from visitors"
      />
      <CardContent>
        <ScrollArea
          style={{
            overflowAnchor: "none",
          }}
          ref={boardRef}
          className="h-[50vh]"
        >
          <div className="flex flex-col-reverse gap-y-2">
            {messages?.map((msg: VisitorMessage) => (
              <Fragment key={crypto.randomUUID()}>
                <ChatPill data={msg} />
              </Fragment>
            ))}
          </div>
          <div
            ref={scrollRef}
            style={{
              overflowAnchor: "auto",
              height: "1px",
            }}
          />
        </ScrollArea>
      </CardContent>
      <CardBanner text={`${!messages ? "counting" : messages.length} msgs`} />
    </Card>
  );
};
