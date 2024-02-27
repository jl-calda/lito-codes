"use client";

import * as z from "zod";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaHand, FaPaperPlane } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CardTitle } from "@/components/card-title";
import AvatarPopover from "./avatar-popover";

import { cn } from "@/lib/utils";
import { send } from "@/actions/visitor/send";
import { useRouter } from "next/navigation";
import { BannerSuccess } from "@/components/banner-success";
import { BannerPending } from "@/components/banner-pending";
import { BannerError } from "@/components/banner-error";

const MessageSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  message: z.string().min(3),
});

interface MessageFormProps {
  className?: string;
}

export const MessageForm = ({ className }: MessageFormProps) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const { setValue, watch } = useForm();
  const avatar = watch("avatar");
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
      send(updatedData)
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setTimeout(() => {
              setError("");
            }, 3000);
          }
          if (data.success) {
            form.reset();
            router.push("/", { scroll: false });
            router.refresh();
            setSuccess(data.success);
            setTimeout(() => {
              setSuccess("");
            }, 3000);
          }
        })
        .catch((error) => {
          setError("An error occurred");
        });
    });
  };

  return (
    <Card className={cn("relative", className)}>
      <CardTitle
        icon={FaHand}
        title="Say hi!"
        subtitle="Join my message board. Choose an avatar!"
        className="mt-4 lg:mt-0"
      />
      {}

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-2"
          >
            <div className="flex flex-row space-x-2 items-center">
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
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        disabled={pending}
                        {...field}
                        className="rounded-lg bg-background h-14 focus-visible:ring-0"
                        type="text"
                        placeholder="Your Name"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Textarea
                        disabled={pending}
                        {...field}
                        className="rounded-lg bg-background h-14 focus-visible:ring-0"
                        placeholder="Minimum 3 characters."
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="rounded-lg h-14 w-14"
              >
                <FaPaperPlane />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      {success && <BannerSuccess message={success} />}
      {pending && (!success || !error) && <BannerPending message="Sending" />}
      {error && <BannerError message={error} />}
    </Card>
  );
};
