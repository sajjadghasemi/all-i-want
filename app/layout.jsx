import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import { cookies } from "next/headers";
import Theme from "./theme";

export const metadata = {
    title: "Sajjad Ghasemi | سجّاد قاسمی",
    description: "Sajjad's personal web app",
    icons: {
        icon: "/favicon.png",
    },
};

const getMe = async () => {
    let cookie = cookies().get("token");
    if (cookie) {
        const response = await fetch(`http://localhost:4000/user/me`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                auth: `ut ${cookie.value}`,
            },
        });
        const me = await response.json();
        return me;
    } else {
        return undefined;
    }
};

export default async function RootLayout({ children, postModal }) {
    const me = await getMe();
    return (
        <html lang="en">
            <body className="bg-yellow-100 text-black dark:text-yellow-100 dark:bg-yellow-950 transition-all duration-300">
                <Providers>
                    <Theme>
                        <NextTopLoader
                            color="darkred"
                            initialPosition={0.08}
                            crawlSpeed={200}
                            height={4}
                            crawl={true}
                            showSpinner={false}
                            easing="ease"
                            speed={200}
                        />
                        <Navbar me={me ? me : undefined} />
                        {postModal}
                        {children}
                    </Theme>
                </Providers>
            </body>
        </html>
    );
}
