"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { FaMessage, FaPaperPlane } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  twoFactor: z.string(),
});

const Contact = () => {
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
    <Card className="flex flex-col order-1 md:order-none">
      <CardHeader>
        <h2 className="text-2xl font-bold flex items-center">
          <FaMessage className="h-6 w-6 mr-2" />
          Contact
        </h2>
        <p className="text-muted-foreground text-sm">
          Fill up the form below and send me a message!
        </p>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={() => {}}
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
