"use client";
import React from "react";
import Cover from "@/utils/images/cover.png";
import Profile from "@/utils/images/men.jpg";
import Navbar from "./Navbar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Image_url } from "@/secret";
import { useGetImagesQuery } from "@/redux/features/imageApi";
import PrintProfileImage from "./PrintProfileImage";

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
            ? "w-full h-[350px] "
            : "w-full h-[350px] md:h-[450px] lg:h-[650px]"
        }
      >
        <Navbar />
        <div className="max-w-[1200px] h-[80%] mx-auto px-4 flex items-center">
          {pathname.includes("about") && (
            <h1 className="w-full text-gray-800 mt-3 text-center">About me</h1>
          )}
          {pathname.includes("contact") && (
            <h1 className="w-full text-gray-800 mt-3 text-center">Contact</h1>
          )}
          {!pathname.includes("about") && !pathname.includes("contact") && (
            <div className="min-w-[350px] p-5 md:p-10 border border-white/50 text-center bg-black/10 backdrop-blur-lg rounded-md relative group">
              <h2 className="text-white drop-shadow-md mb-2">Hi,</h2>
              <PrintProfileImage />

              <h1 className="text-4xl lg:text-5xl text-white drop-shadow-md mt-2">
                I'm Jhon Doe
              </h1>
              <div className="flex gap-3 justify-center items-center pt-2 text-white drop-shadow-md">
                <span>Professional Photographer</span>
                {/* <div className="w-  [100px] h-[1px] bg-white"></div> */}
              </div>
              <div className="chat chat-start w-[360px]  rounded-lg top-[30%]  hidden absolute md:group-hover:block left-[105%]">
                <p className="max-w-[500px] chat-bubble p-8 bg-white text-left text-black shadow-xl">
                  Behold, I unveil before you a glimpse of my artistic lens, a
                  collection of moments captured through my photography.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
