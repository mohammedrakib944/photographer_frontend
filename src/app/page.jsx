"use client";
import ClientLayout from "@/components/common/ClientLayout";
import ModalImage from "react-modal-image";
import ErrorAlt from "@/components/common/ErrorAlt";
import Scalation from "@/components/common/Scalation";
import { Image_url } from "@/secret";
import { useState } from "react";

// redux
import { useGetImagesQuery } from "@/redux/features/imageApi";

export default function Home() {
  const [image_type, setImage_type] = useState("landscape");
  const {
    data: Images,
    isLoading,
    error,
  } = useGetImagesQuery(image_type, { refetchOnMountOrArgChange: true });

  // If image loading error

  return (
    <div>
      <ClientLayout>
        <div>
          {/* Photo type */}
          <ul className="uppercase font-bold flex gap-4 sticky top-0 bg-black backdrop-blur-lg py-5 z-10">
            <li
              className={
                image_type === "landscape"
                  ? "text-xs text-blue-500 cursor-not-allowed"
                  : "text-xs hover:underline cursor-pointer"
              }
              onClick={() => setImage_type("landscape")}
            >
              LANDSCAPE
            </li>
            <li
              className={
                image_type === "portrait"
                  ? "text-xs text-blue-500 cursor-not-allowed"
                  : "text-xs hover:underline cursor-pointer"
              }
              onClick={() => setImage_type("portrait")}
            >
              PORTRAIT
            </li>
          </ul>
          {error && (
            <div className="mt-4">
              <ErrorAlt title="Can't get images!" />
            </div>
          )}
          {/* Is loading */}
          {isLoading ? (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              <Scalation />
              <Scalation />
              <Scalation />
              <Scalation />
              <Scalation />
              <Scalation />
            </div>
          ) : (
            <div className="columns-2 md:columns-3 gap-3">
              {Images &&
                Images.map((image_name, index) => (
                  <div className="mb-3 overflow-hidden" key={index}>
                    <ModalImage
                      className="w-full hover:rotate-2 hover:scale-105 duration-150"
                      small={Image_url(image_type, "small", image_name)}
                      large={Image_url(image_type, "large", image_name)}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      </ClientLayout>
    </div>
  );
}
