"use client";
import { API_URL } from "@/secret";
import Image from "next/image";
import DummyProfile from "@/utils/images/profile.svg";
import { useGetProfileImagesQuery } from "@/redux/features/profileImage";

const PrintProfileImage = () => {
  const { data: profileImage } = useGetProfileImagesQuery();

  return (
    <>
      {profileImage ? (
        <img
          className="max-w-[400px] rounded-full border-4 border-white hover:rotate-2 hover:scale-105 duration-150"
          src={`${API_URL}/images/profile/${profileImage}`}
          width="100%"
          height="100%"
          alt="Image"
        />
      ) : (
        <Image
          className="max-w-[400px] rounded-full border-4 border-white hover:rotate-2 hover:scale-105 duration-150"
          src={DummyProfile}
          width="100%"
          height="100%"
          alt="Image"
        />
      )}
    </>
  );
};

export default PrintProfileImage;
