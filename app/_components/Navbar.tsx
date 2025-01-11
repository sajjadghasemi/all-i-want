import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-5 flex h-20 space-x-10 items-center justify-start w-full bg-gray-100">
      <Link
        className="text-gray-600 font-bold"
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-gray-600 font-bold"
        href="/login"
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
