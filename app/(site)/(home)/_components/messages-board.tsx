import { Fragment, useEffect, useRef } from "react";
import { FaStackExchange } from "react-icons/fa6";

import { CardTitle } from "@/components/card-title";
import { Card, CardContent } from "@/components/ui/card";
import { VisitorMessage } from "@prisma/client";

import { ChatPill } from "./chat-pill";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CardBanner } from "@/components/card-banner";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

interface MessagesBoardProps {
  className?: string;
  messages?: VisitorMessage[] | null;
}

export const MessagesBoard = ({ className, messages }: MessagesBoardProps) => {
  // const ChatPill = dynamic(() => import("./chat-pill"), { ssr: false });

  return (
    <Card className={cn(className, "relative")}>
      {/* <BackgroundGradientAnimation> */}
      <CardTitle
        icon={FaStackExchange}
        title="Message Board"
        subtitle="All messages from visitors💌"
        className="mt-4 lg:mt-0"
      />
      <CardContent>
        <ScrollArea className="h-[65vh]">
          <div
            className="flex flex-col-reverse gap-y-2"
            suppressHydrationWarning
          >
            {messages?.map((msg: VisitorMessage) => (
              <Fragment key={crypto.randomUUID()}>
                <ChatPill data={msg} />
              </Fragment>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardBanner
        text={`${!messages ? "counting" : messages.length} msgs`}
        secondary
      />
      {/* </BackgroundGradientAnimation> */}
    </Card>
  );
};
