"use client";
import React from "react";
import Cover from "../../../public/images/cover.png";

import Navbar from "./Navbar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Image_url } from "@/secret";
import { useGetImagesQuery } from "@/redux/features/imageApi";

const Hero = () => {
  const pathname = usePathname();
  // redux
  const { data: coverImage, error } = useGetImagesQuery("cover");

  return (
    <div>
      {coverImage ? (
        <img
          src={Image_url("landscape", "large", coverImage)}
          className="fixed -z-50 w-full h-[350px] md:h-[450px] lg:h-[650px] object-cover animatedCover"
          width="100%"
          height="100%"
          alt="Cover image"
        />
      ) : (
        <Image
          src={Cover}
          className="fixed -z-50 w-full h-[350px] md:h-[450px] lg:h-[650px] object-cover animatedCover"
          width="100%"
          height="100%"
          alt="Cover image"
        />
      )}
      <div
        className={
          pathname.includes("about") || pathname.includes("contact")
            ? "w-full h-[350px] bg-gradient-to-t from-black to-black/20 backdrop-blur-md"
            : "w-full h-[350px] md:h-[450px] lg:h-[650px] bg-gradient-to-t from-black to-black/30 backdrop-blur-md"
        }
      >
        <Navbar />
        <div className="max-w-[1200px] h-[80%] mx-auto px-4 flex items-center">
          {pathname.includes("about") && (
            <h1 className="w-full text-white mt-3 text-center">About me</h1>
          )}
          {pathname.includes("contact") && (
            <h1 className="w-full text-white mt-3 text-center">Contact</h1>
          )}
          {!pathname.includes("about") && !pathname.includes("contact") && (
            <div>
              <h2 className="text-white mb-2">Hi 👋,</h2>
              <h1 className="text-4xl lg:text-6xl text-white">
                I'm Jhon Limon
              </h1>
              <div className="flex gap-3 items-center pt-2 text-gray-200">
                <span>Professional Photographer</span>
                <div className="w-[100px] h-[1px] bg-white"></div>
              </div>
              <p className="mt-2 text-white/60 font-normal text-sm">
                Behold, I unveil before you a glimpse of my artistic lens, a
                collection of moments captured through my photography.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
