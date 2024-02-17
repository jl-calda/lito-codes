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
    <section className="h-full grid grid-flow-row md:grid md:grid-cols-[1fr_1.5fr] gap-x-4 gap-y-4 py-4">
      <div className="flex flex-col space-y-4 order-last md:order-none">
        <Card className="">
          <CardHeader className="">
            <h2 className="text-2xl font-bold flex">
              <FaMessage className="h-6 w-6 mr-2" />
              Hire Me Instead
            </h2>
            <p className="text-muted-foreground text-sm">
              Current looking for a job. I'm open for any opportunities.🧑‍💻
            </p>
          </CardHeader>
          <CardFooter className="pb-4">
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
        </Card>
        <Card className="flex-1 flex flex-col pb-4 px-6">
          <CardHeader className="px-0">
            <h2 className="text-2xl font-bold flex">
              <FaCoffee className="h-6 w-6 mr-2" />
              Buy me a coffee
            </h2>
            <p className="text-muted-foreground text-sm">
              Your donation will keep caffein in my veins. ☕
            </p>
          </CardHeader>
          <CardContent
            className="py-2 rounded-lg flex-1 flex items-center justify-center pb-4"
            style={{
              backgroundImage: "var(--gradient)",
            }}
          >
            <div className="w-1/2">
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
        </Card>
      </div>
      <Card className="flex flex-col order-1 md:order-none">
        <CardHeader>
          <h2 className="text-2xl font-bold flex">
            <FaMessage className="h-6 w-6 mr-2" />
            Contact
          </h2>
          <p className="text-muted-foreground text-sm">
            Fill up the form below and send me a message!
          </p>
        </CardHeader>
        <CardContent className="flex-1 pb-4">
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
                      I'll need a way to contact you back. 📧
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
                      fastest I could. 💨
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
