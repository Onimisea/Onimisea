"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  full_name: z
    .string()
    .min(2, { message: "Full name must be at least 6 characters." })
    .max(50, { message: "Full name must not exceed 50 characters." }),
  email_address: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(3, { message: "Email must be at least 12 characters." })
    .max(50, { message: "Email must not exceed 50 characters." }),
  message: z
    .string()
    .min(2, { message: "Message must be at least 12 characters." })
    .max(50, { message: "Message must not exceed 1000 characters." }),
});

export const ContactsForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      full_name: "",
      email_address: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (response.ok) {
      toast.success(res.message);
      form.reset();
    } else {
      toast.error(res.error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  className="text-white border border-onms-secondary-lt outline-none focus-visible:outline-none focus-visible:ring-0 focus-within:ring-inherit focus-within:border-onms-accent focus-visible:border-onms-accent bg-transparent"
                />
              </FormControl>
              <FormMessage className="text-onms-accent" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="johndoe@gmail.com"
                  {...field}
                  className="text-white border border-onms-secondary-lt outline-none focus-visible:outline-none focus-visible:ring-0 focus-within:ring-inherit focus-within:border-onms-accent bg-transparent focus-visible:border-onms-accent"
                />
              </FormControl>
              <FormMessage className="text-onms-accent" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="I want to..."
                  {...field}
                  className="text-white border border-onms-secondary-lt outline-none focus-visible:outline-none focus-visible:ring-0 focus-within:ring-inherit focus-within:border-onms-accent bg-transparent min-h-[150px] focus-visible:border-onms-accent"
                />
              </FormControl>
              <FormMessage className="text-onms-accent" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="rounded-full px-12 py-6 text-lg duration-500 transition bg-onms-secondary-lt text-white hover:bg-onms-accent hover:text-onms-text-lt hover:font-bold hover:border-none leading-none"
        >
          <span className="mt-1">Submit</span>
        </Button>
      </form>
    </Form>
  );
};
