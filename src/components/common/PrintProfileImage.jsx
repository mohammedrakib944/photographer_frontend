"use client";
import { API_URL } from "@/secret";
import { useGetProfileImagesQuery } from "@/redux/features/profileImage";

//Nothing changes

const PrintProfileImage = () => {
  const { data: profileImage } = useGetProfileImagesQuery();

  return (
    <>
      {profileImage && (
        <img
          className={`max-w-[100px] md:max-w-[200px] mx-auto rounded-full border-2 border-white hover:rotate-2 hover:scale-105 duration-150`}
          src={`${API_URL}/images/profile/${profileImage}`}
          width="100%"
          height="100%"
          alt="Image"
        />
      )}
    </>
  );
};

export default PrintProfileImage;
