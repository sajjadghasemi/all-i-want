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
        <div className="border-2 px-3 rounded-lg">
            {me ? (
                <span className="cursor-pointer" onClick={logout}>
                    {me.username}
                </span>
            ) : (
                <Link className="" href="/login">
                    Login
                </Link>
            )}
        </div>
    );
};

export default Logout;
