import { getMessages } from "@/actions/get-messages";
import { VisitorMessage } from "@prisma/client";

interface MessagesBoardProps {
  data: VisitorMessage[] | null;
}

export const MessagesBoard = ({ data }: MessagesBoardProps) => {
  return (
    <div className="flex flex-col-reverse">
      {data?.map((msg: VisitorMessage) => (
        <div key={crypto.randomUUID()}>{msg.message}</div>
      ))}
    </div>
  );
};
