import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};

export type BlogDataType = {
  title: string;
  slug: string;
  tags: string[];
  author: string;
  thumbnail: string;
  date: string;
  featured: boolean;
  excerpt: string;
};
// ---
// title: "Revalidate data with Next.js"
// slug: "revalidate-data-with-next-js"
// tags: ["next-js", "typescript", "ssr"]
// author: "JL"
// thumbnail: "a"
// date: "February 26, 2023"
// featured: true
// excerpt: "Learn to revalidate the cache in a Next-js application using the revalidate options in the new app router."
// ---
