"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaDownload, FaMessage, FaPaperPlane } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCoffee } from "react-icons/fa";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  twoFactor: z.string(),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      twoFactor: "",
    },
  });
  return (
    <section className="h-full grid grid-cols-[1fr_1.5fr] gap-x-4">
      <div className="flex flex-col space-y-4">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold flex">
              <FaMessage className="h-6 w-6 mr-2" />
              Hire Me Instead
            </h2>
            <p className="text-muted-foreground text-sm">
              Current looking for a job. I'm open for any opportunities.🧑‍💻
            </p>
          </CardHeader>
          <div className="grid grid-cols-[3fr_1fr] space-x-4 px-6 pb-4">
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/images/hiring.gif"
                  fill
                  className="rounded-lg"
                  alt="hire me"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter className="p-0">
              <Button
                variant="secondary"
                className="rounded-lg w-full h-full"
                asChild
              >
                <Link
                  href="/api/resume"
                  target="_blank"
                  className="flex flex-col items-center justify-center space-y-2"
                >
                  <FaDownload className="h-6 w-6 mr-2" />
                  <span>Resume</span>
                </Link>
              </Button>
            </CardFooter>
          </div>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <h2 className="text-2xl font-bold flex">
              <FaCoffee className="h-6 w-6 mr-2" />
              Buy me a coffee
            </h2>
            <p className="text-muted-foreground text-sm">
              Your donation will keep caffein in my veins. ☕
            </p>
          </CardHeader>
          <CardContent
            className="py-2"
            style={{
              backgroundImage: "var(--gradient)",
            }}
          >
            <div className="w-1/2 mx-auto px-2">
              <AspectRatio
                ratio={1 / 1}
                className=""
              >
                <Image
                  src="/images/qr-code.jpg"
                  fill
                  className="rounded-lg"
                  alt="qr code for donation"
                />
              </AspectRatio>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
      <Card className="flex flex-col">
        <CardHeader>
          <h2 className="text-2xl font-bold flex">
            <FaMessage className="h-6 w-6 mr-2" />
            Contact
          </h2>
          <p className="text-muted-foreground text-sm">
            Fill up the form below and send me a message!
          </p>
        </CardHeader>
        <CardContent className="flex-1">
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
                        type="text"
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
                      <FormLabel>Email</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-secondary"
                        type="text"
                      />
                    </FormControl>
                    <FormDescription>
                      You'll receive a code to verify your email. So I don't
                      spammed by bots. 🙇
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                name="name"
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
                    <FormDescription>
                      Please be polite and respectful. Will respond to you the
                      fasted i could. 💨
                    </FormDescription>
                  </FormItem>
                )}
              />
              <Button className="rounded-lg">
                <FaPaperPlane className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
            {/* <div className="flex items-center space-x-2 justify-end">
           
            </div> */}
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactPage;
