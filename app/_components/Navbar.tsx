"use client";

import Link from "next/link";
import { logout } from "../_lib/auth";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ user }: { user: string | null }) => {
  const pathname = usePathname();
  const router = useRouter();

  const logoutHandler = () => {
    logout();
    router.refresh();
  };

  return (
    <nav className="px-5 flex h-20 space-x-10 items-center justify-start w-full bg-gray-100">
      <Link className="text-gray-600 font-bold" href="/">
        Home
      </Link>
      {user ? (
        <span
          onClick={logoutHandler}
          className="text-gray-600 font-bold cursor-pointer"
        >
          Logout
        </span>
      ) : (
        <>
          {pathname === "/login" ? null : (
            <Link className="text-gray-600 font-bold" href="/login">
              Login
            </Link>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
