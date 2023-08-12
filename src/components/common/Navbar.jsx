"use client";
import Link from "next/link";
import Logo from "../../../public/images/logo.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import useAuth from "@/app/hooks/useAuth";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const authChecked = useAuth();

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between text-gray-200">
      <Link href="/">
        <Image src={Logo} width="150" height="50" alt="Logo Rakib" />
      </Link>
      <ul className="text-sm flex items-center gap-3 lg:gap-6">
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
          {user && !authChecked ? (
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          ) : (
            <Link href="/login" className="btn_black">
              login
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
