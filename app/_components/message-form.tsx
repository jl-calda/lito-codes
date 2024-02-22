"use client";

import * as z from "zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FaHand, FaPaperPlane } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CardTitle } from "@/components/card-title";
import AvatarPopover from "./avatar-popover";

import { useSocket } from "@/components/providers/socket-provider";
import axios from "axios";

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
      avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/50.jpg",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof MessageSchema>) => {
    const updatedData = { ...data, avatar: avatar || data.avatar };

    startTransition(() => {
      axios.post("/api/socket/send", updatedData).then(() => {
        form.reset();
      });
    });
  };

  return (
    <Card className="w-72">
      <CardTitle
        icon={FaHand}
        title="Say hi!"
        subtitle="Join my message board"
      />
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
        </Form>
      </CardContent>
    </Card>
  );
};
