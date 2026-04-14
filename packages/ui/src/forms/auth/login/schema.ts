import { z } from "zod";

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const loginFormSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
