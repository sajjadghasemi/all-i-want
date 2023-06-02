"use client";

import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logout = ({ me }) => {
    const router = useRouter();
    const logout = () => {
        deleteCookie("token");
        router.refresh();
        router.push("login");
    };
    return (
        <>
            {me ? (
                <span className="cursor-pointer" onClick={logout}>
                    {me.username}
                </span>
            ) : (
                <Link
                    className="w-16 after:content-[''] after:absolute after:w-0 after:h-[1px] after:block after:transition-all after:duration-500 after:ease-in-out after:bottom-1/4 hover:after:w-16 hover:after:h-[1px] hover:after:bg-slate-700"
                    href="/login"
                >
                    Login
                </Link>
            )}
        </>
    );
};

export default Logout;
