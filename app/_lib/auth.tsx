"use server";

import { redirect } from "next/navigation";
import { SignupFormSchema, FormState } from "./definitions";
import { createSession, deleteSession } from "./session";
import { revalidateTag } from "next/cache";

export async function login(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await createSession(validatedFields.data.username);
  redirect("/");
}

export async function logout() {
  deleteSession();
  revalidateTag("user");
  redirect("/");
}
