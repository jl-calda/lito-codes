import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { VisitorMessage } from "@prisma/client";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";

interface ChatPillProps {
  data: VisitorMessage;
}

export const ChatPill = ({
  data: { name, avatar, message, createdAt },
}: ChatPillProps) => {
  return (
    <div className="flex flex-col space-y-0 w-full">
      <div className="flex gap-x-3">
        <Avatar className="rounded-lg h-14 w-14">
          <AvatarImage
            src={avatar}
            alt={name}
          />
          <AvatarFallback>
            {name.slice(0, 2).toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 flex flex-col">
          <div className="flex-col space-y-1 justify-between w-full items-center">
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-muted-foreground">{`${new Date(
              createdAt
            ).toLocaleTimeString()} ${new Date(
              createdAt
            ).toLocaleDateString()}`}</p>
          </div>
        </div>
      </div>
      <p className="pl-16 text-sm text-foreground">{message}</p>
    </div>
  );
};
