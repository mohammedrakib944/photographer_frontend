"use client";
import Link from "next/link";
import Logo from "@/utils/images/logo.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import useAuth from "@/app/hooks/useAuth";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const authChecked = useAuth();

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between text-gray-200">
        <Link href="/">
          <Image
            className="drop-shadow-lg bg-black px-2 py-1"
            src={Logo}
            width="150"
            height="50"
            alt="Logo Rakib"
          />
        </Link>
        <ul className="text-gray-600 text-sm flex items-center drop-shadow-md gap-3 lg:gap-6">
          <li className="hidden md:block">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/login" className="btn_white">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
