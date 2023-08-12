"use client";
import Link from "next/link";
import { API_URL } from "@/secret";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
// redux
import {
  useGetProfileImagesQuery,
  useUploadProfileImagesMutation,
} from "@/redux/features/profileImage";

const page = () => {
  const [profileImage, setprofileImage] = useState("");
  // redux
  const { data: profilePic } = useGetProfileImagesQuery();
  const [uploadProfileImages, { isLoading, error: uploadError }] =
    useUploadProfileImagesMutation();

  const changeProfileImage = (e) => {
    e.preventDefault();
    if (!profileImage || profileImage.length < 1) {
      toast.error("No image selected!");
      return;
    }

    let formData = new FormData();
    formData.append("profile", profileImage);
    //Redux Function call
    uploadProfileImages(formData);
    setprofileImage("");
  };

  useEffect(() => {
    if ((!isLoading, uploadError)) {
      toast.error(uploadError.data?.message);
    }
  }, [uploadError]);

  return (
    <div>
      <Toaster />
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="w-[360px] mx-auto">
        <div>
          <h2 className="mt-4 mb-2">Profile Picture</h2>
          {profilePic && (
            <img
              className="rounded-full border-4 border-white shadow-xl object-cover"
              src={`${API_URL}/images/profile/${profilePic}`}
              width="360"
              height="360"
              alt="Profile Image"
            />
          )}
        </div>
        <br />

        <div>
          <form onSubmit={changeProfileImage}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setprofileImage(e.target.files[0])}
              className="file-input file-input-bordered rounded-none w-full"
            />
            <button disabled={isLoading} type="submit" className="btn_sp mt-4">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
