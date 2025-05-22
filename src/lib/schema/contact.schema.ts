import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Missed your name" })
    .min(3, { message: "Your name should be at least 3 chars" }),
  email: z.string().email({ message: "Invalid Email" }),
  message: z.string().min(2, { message: "You didn't enter message" }),
});
type TContactForm = z.infer<typeof contactSchema>;
export { contactSchema, type TContactForm };
