import Link from "next/link";
import ChangeThemeButton from "./ChangeThemeButton";
import Logout from "./Logout";

const Navbar = ({ me }) => {
    return (
        <div className="flex gap-5 items-center dark:bg-black dark:text-white relative transition-[all 300ms cubic-bezier(0.075, 0.82, 0.165, 1)]">
            <h1 className="text-3xl text-black dark:text-white">
                Hello world!
            </h1>
            <Link
                className="w-16 after:content-[''] after:absolute after:w-0 after:h-[1px] after:block after:transition-all after:duration-500 after:ease-in-out after:bottom-1/4 hover:after:w-16 hover:after:h-[1px] hover:after:bg-slate-700"
                href="/"
            >
                Home
            </Link>
            <Link
                className="w-16 after:content-[''] after:absolute after:w-0 after:h-[1px] after:block after:transition-all after:duration-500 after:ease-in-out after:bottom-1/4 hover:after:w-16 hover:after:h-[1px] hover:after:bg-slate-700"
                href="/otp"
            >
                otp
            </Link>
            <Link
                className="w-16 after:content-[''] after:absolute after:w-0 after:h-[1px] after:block after:transition-all after:duration-500 after:ease-in-out after:bottom-1/4 hover:after:w-16 hover:after:h-[1px] hover:after:bg-slate-700"
                href="/stepper"
            >
                stepper
            </Link>
            <Link
                className="w-16 after:content-[''] after:absolute after:w-0 after:h-[1px] after:block after:transition-all after:duration-500 after:ease-in-out after:bottom-1/4 hover:after:w-16 hover:after:h-[1px] hover:after:bg-slate-700"
                href="/slider"
            >
                slider
            </Link>
            <Link
                className="w-16 after:content-[''] after:absolute after:w-0 after:h-[1px] after:block after:transition-all after:duration-500 after:ease-in-out after:bottom-1/4 hover:after:w-16 hover:after:h-[1px] hover:after:bg-slate-700"
                href="/infinite-scroll"
            >
                infinite
            </Link>
            <Logout me={me} />
            <ChangeThemeButton />
        </div>
    );
};

export default Navbar;
