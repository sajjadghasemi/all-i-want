import "server-only";

import { cache } from "react";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = cookie;

  if (!session) return null;

  return { isAuth: true, username: session };
});

export const getSession = async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = cookie;

  if (!session) return null;

  return session;
};

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  console.log(JSON.stringify(session));

  try {
    const user = await fetch(JSON.stringify(session), {
      next: { tags: ["user"] },
    });
    return user;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
