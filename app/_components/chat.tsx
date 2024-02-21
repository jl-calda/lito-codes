import { VisitorMessage } from "@prisma/client";

interface ChatProps {
  message: VisitorMessage;
}

export const Chat = ({ message }: VisitorMessage) => {
  return <div>Chat</div>;
};
