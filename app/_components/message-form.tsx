"use client";

import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSocket } from "@/components/providers/socket-provider";
import { Avatar } from "@radix-ui/react-avatar";
import AvatarPopover from "./avatar-popover";
import { FaHand, FaP, FaPaperPlane, FaRegHandSpock } from "react-icons/fa6";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const MessageSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  message: z.string().min(3),
});
export const MessageForm = () => {
  const [pending, startTransition] = useTransition();
  const { setValue, watch } = useForm();
  const avatar = watch("avatar");
  const { isConnected, socket } = useSocket();
  const router = useRouter();
  const form = useForm<z.infer<typeof MessageSchema>>({
    resolver: zodResolver(MessageSchema),
    defaultValues: {
      name: "",
      avatar: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof MessageSchema>) => {
    const updatedData = { ...data, avatar };
    if (!isConnected) {
      return;
    }

    console.log(updatedData);
    // startTransition(() => {
    //   axios
    //     .post("/api/socket/send", data)
    //     .then(() => form.reset())
    //     .then(() => router.refresh());
    // });
  };

  return (
    <Card className="w-72">
      <CardHeader>
        <h3 className="text-2xl font-bold flex items-center">
          <FaHand className="w-6 h-6 mr-2 text-primary" />
          Say hi!
        </h3>
        <p className="text-sm text-muted-foreground">
          Add a message to my visitors board.
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-[1fr_2.5fr_1fr] space-y-0 gap-x-2 gap-y-2 place-content-stretch"
          >
            <FormField
              name="avatar"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormControl>
                    <AvatarPopover
                      value={avatar || field.value}
                      onSetValue={(value) => setValue("avatar", value)}
                      disabled={pending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 space-y-0">
                  <FormControl>
                    <Input
                      disabled={pending}
                      {...field}
                      className="rounded-lg bg-background h-14 focus-visible:ring-0 col-span-2"
                      type="text"
                      placeholder="Your Name"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 space-y-0">
                  <FormControl>
                    <Textarea
                      disabled={pending}
                      {...field}
                      className="rounded-lg bg-background h-14 focus-visible:ring-0 col-span-2"
                      placeholder="Message"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="rounded-lg h-full w-full"
            >
              <FaPaperPlane />
            </Button>
          </form>
          {/* <div className="flex items-center space-x-2 justify-end">
           
            </div> */}
        </Form>
      </CardContent>
    </Card>
  );
};
