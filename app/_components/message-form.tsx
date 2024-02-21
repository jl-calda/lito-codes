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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col h-full space-y-2"
      >
        <div>AVatar,{avatar}</div>
        <div>AVatar,{form.getValues("name")}</div>
        <div className="flex">
          <FormField
            name="avatar"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between"></div>
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
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    disabled={pending}
                    {...field}
                    className="bg-secondary"
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-x-2 items-center">
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    disabled={pending}
                    {...field}
                    className="bg-secondary"
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="rounded-lg"
          >
            Send Message
          </Button>
        </div>
      </form>
      {/* <div className="flex items-center space-x-2 justify-end">
           
            </div> */}
    </Form>
  );
};
