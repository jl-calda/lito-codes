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
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const MessageSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  message: z.string().min(3),
  confirmation: z.string(),
});
export const MessageForm = () => {
  const form = useForm<z.infer<typeof MessageSchema>>({
    resolver: zodResolver(MessageSchema),
    defaultValues: {
      name: "",
      avatar: "",
      message: "",
      confirmation: "",
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={() => {}}
        className="flex flex-col h-full space-y-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Name</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input
                  {...field}
                  className="bg-secondary"
                  placeholder="Name"
                  type="text"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="avatar"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Avatar</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input
                  {...field}
                  className="bg-secondary"
                  type="text"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <FormLabel>Message</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Textarea
                  {...field}
                  className="bg-secondary flex-1"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="confirmation"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <FormLabel>Message</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Textarea
                  {...field}
                  className="bg-secondary flex-1"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="rounded-lg">Send Message</Button>
      </form>
      {/* <div className="flex items-center space-x-2 justify-end">
           
            </div> */}
    </Form>
  );
};
