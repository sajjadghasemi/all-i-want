import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./_components/Navbar";
import { getUser } from "./_lib/dal";

export const metadata = {
  title: "Sajjad Ghasemi | سجّاد قاسمی",
  description: "Sajjad's personal web app",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
  auth,
}: {
  children: ReactNode;
  auth: ReactNode;
}) {
  const user = await getUser();

  return (
    <html lang="en">
      <body>
        {!user && auth}
        <Navbar user={user} />
        <main className="px-5 mx-auto py-6">{children}</main>
      </body>
    </html>
  );
}
