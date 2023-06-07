"use client";
import Link from "next/link";
import ChangeThemeButton from "./ChangeThemeButton";
import Logout from "./Logout";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar = ({ me }) => {
    const active = useSelectedLayoutSegment();

    return (
        <>
            <nav className="flex items-center justify-between px-4 w-full gap-8 bg-white dark:bg-black">
                <h1 className="text-3xl text-black dark:text-white">
                    Hello world!
                </h1>
                <ul className="grid grid-cols-5 gap-x-6 text-center">
                    <li
                        className={`inline-block text-center peer peer/item-1 px-2 ${
                            active === null &&
                            "bg-gray-300 dark:bg-gray-700 rounded-lg"
                        }`}
                    >
                        <Link
                            className="inline-block py-3 text-blue-900 dark:text-blue-200 font-bold"
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className={`inline-block text-center peer peer/item-2 px-2 ${
                            active === "otp" &&
                            "bg-gray-300 dark:bg-gray-700 rounded-lg"
                        }`}
                    >
                        <Link
                            className="inline-block py-3 text-blue-900 dark:text-blue-200 font-bold"
                            href="/otp"
                        >
                            otp
                        </Link>
                    </li>
                    <li
                        className={`inline-block text-center peer peer/item-3 px-2 ${
                            active === "stepper" &&
                            "bg-gray-300 dark:bg-gray-700 rounded-lg"
                        }`}
                    >
                        <Link
                            className="inline-block py-3 text-blue-900 dark:text-blue-200 font-bold"
                            href="/stepper"
                        >
                            stepper
                        </Link>
                    </li>
                    <li
                        className={`inline-block text-center peer peer/item-4 px-2 ${
                            active === "slider" &&
                            "bg-gray-300 dark:bg-gray-700 rounded-lg"
                        }`}
                    >
                        <Link
                            className="inline-block py-3 text-blue-900 dark:text-blue-200 font-bold"
                            href="/slider"
                        >
                            slider
                        </Link>
                    </li>
                    <li
                        className={`inline-block text-center peer peer/item-5 px-2 ${
                            active === "infinite-scroll" &&
                            "bg-gray-300 dark:bg-gray-700 rounded-lg"
                        }`}
                    >
                        <Link
                            className="inline-block py-3 text-blue-900 dark:text-blue-200 font-bold"
                            href="/infinite-scroll"
                        >
                            infinite
                        </Link>
                    </li>
                    <hr className="border-none transition-all duration-300 ease-in-out peer-hover/item-1:ml-[6%] peer-hover/item-2:ml-[140%] peer-hover/item-3:ml-[272%] peer-hover/item-4:ml-[406%] peer-hover/item-5:ml-[539%] after:content-[''] after:absolute after:w-0 after:h-2 after:block after:transition-all after:duration-300 after:ease-in-out peer-hover:after:w-16 peer-hover:after:h-2 peer-hover:after:bg-blue-900 dark:peer-hover:after:bg-blue-200" />
                </ul>
                <div className="flex gap-2">
                    <Logout me={me} />
                    <ChangeThemeButton />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
