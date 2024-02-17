"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  twoFactor: z.string(),
});

const ServicesPage = () => {
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
    <section className="h-full">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Services</h2>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ServicesPage;
