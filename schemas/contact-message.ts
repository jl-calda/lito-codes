import * as z from "zod";

export const ContactMessage = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(3),
});
