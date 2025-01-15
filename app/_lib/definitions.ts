import { z } from "zod";

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Must be at least 2 characters long." })
    .trim(),
  password: z
    .string()
    .min(4, { message: "Must be at least 4 characters long" })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        username?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
