"use client";
import { BsArrowRight } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between flex-wrap">
          <div>
            <h3>Quick links</h3>
            <ul className="text-xs">
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Landscame
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Fashion
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Portrait
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Lifestyle
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Info</h3>
            <ul className="text-xs">
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li className="mt-2">
                <Link href="/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Our mission</h3>
            <p className="text-sm mt-2">
              Quality materials, good designs, craftsmanship and sustainability.
            </p>
          </div>
        </div>
        <div className="my-8 flex items-center gap-4 justify-between flex-wrap">
          <div>
            <h3>Subscribe to our email</h3>
            <div className="w-[300px]  border border-gray-600 flex gap-2 items-center mt-2">
              <input
                type="text"
                className="outline-none p-2 w-full text-sm text-black"
                placeholder="Email"
              />
              <span className="pr-2">
                <BsArrowRight />
              </span>
            </div>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="#">
              <AiFillGithub />
            </a>
            <a href="#">
              <TfiWorld />
            </a>
            <a href="#">
              <AiFillFacebook />
            </a>{" "}
            <a href="#">
              <AiOutlineInstagram />
            </a>
            <a href="#">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pt-4 pl-4 mt-6 border-t border-gray-600">
        <span className="text-xs text-gray-500">© 2023, myselfrakib.com</span>
      </div>
    </div>
  );
};

export default Footer;
