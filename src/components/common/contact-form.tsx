"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import Tiptap from "./tiptap";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { GoArrowRight } from "react-icons/go";
import { motion } from "motion/react";
import { contactSchema, TContactForm } from "@/lib/schema/contact.schema";

// Contact form
export default function ContactForm() {
  // state to handle text area input
  const [post, setPost] = useState<string | null>(null);

  // Hook to handle form
  const form = useForm<TContactForm>({
    resolver: zodResolver(contactSchema),
  });

  // Submit function
  const onSubmit: SubmitHandler<TContactForm> = (values) => {
    console.log(values);
    console.log(post);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 space-y-8"
        >
          <div className="mx-auto flex flex-col gap-5 sm:w-3/4 sm:flex-row">
            {/* Name input  */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full"
            >
              <FormField
                control={form.control}
                defaultValue={""}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Your Name" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <FormField
                control={form.control}
                defaultValue={""}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Your Email" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          </div>

          {/* Text area input */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <FormField
              control={form.control}
              defaultValue={""}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Tiptap
                      className={`h-44 w-full rounded-lg border ${form.formState.errors.message ? "border-red-500" : "border-zinc-300"} bg-zinc-50/70 p-5 sm:h-56 dark:bg-zinc-900`}
                      onChange={field.onChange}
                      setPost={setPost}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Submit button */}
          <Button className="group mx-auto flex w-3/4 cursor-pointer items-center gap-3 rounded-full sm:w-1/4">
            Send Now
            <GoArrowRight className="my-auto w-6 group-hover:animate-bounce" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
