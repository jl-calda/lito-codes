"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaMessage, FaPaperPlane } from "react-icons/fa6";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { ContactMessage } from "@/schemas/contact-message";
import { sendMessage } from "@/actions/contact/send-message";
import { useState, useTransition } from "react";
import { FormSuccess } from "@/components/form-success";
import { FormPending } from "@/components/form-pending";
import { FormError } from "@/components/form-error";
import { CardTitle } from "@/components/card-title";
import { cn } from "@/lib/utils";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ContactMessage>>({
    resolver: zodResolver(ContactMessage),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ContactMessage>) => {
    startTransition(() => {
      sendMessage(data)
        .then((res) => {
          if (res.success) {
            setSuccess(res.success);
            form.reset();
          }
          if (res.error) {
            form.reset();
            setError(res.error);
          }
        })
        .catch((err) => {
          setError("Something went wrong. Please try again later.");
        });
    });
  };

  const onFocus = () => {
    setSuccess("");
    setError("");
  };

  return (
    <Card className={cn("flex flex-col order-1 md:order-none", className)}>
      <CardTitle
        title="Contact"
        subtitle="Fill up the form below and send me a message!"
        icon={FaMessage}
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full"
        >
          <CardContent className="flex-1 flex space-y-4 flex-col">
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
                      onFocus={onFocus}
                      disabled={pending}
                      {...field}
                      className="bg-secondary"
                      type="text"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Email</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      onFocus={onFocus}
                      disabled={pending}
                      {...field}
                      className="bg-secondary"
                      type="email"
                    />
                  </FormControl>
                  <FormDescription>
                    I'll need a way to contact you back. 📧
                  </FormDescription>
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
                      disabled={pending}
                      onFocus={onFocus}
                      {...field}
                      className="bg-secondary flex-1"
                    />
                  </FormControl>
                  <FormDescription>
                    Please be polite and respectful. Will respond to you the
                    fastest I could. 💨
                  </FormDescription>
                </FormItem>
              )}
            />
            {success && <FormSuccess message={success} />}
            {error && <FormError message={error} />}
            {pending && <FormPending />}
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="rounded-lg w-full"
            >
              <FaPaperPlane className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default Contact;
