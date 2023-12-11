"use client";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Overlay from "@/components/common/Overlay";
import {
  useGetImagesQuery,
  useDeleteImagesMutation,
  useUploadImagesMutation,
} from "@/redux/features/imageApi";
import Spinner from "@/components/common/Spinner";
import { Image_url } from "@/secret";

const Photos = () => {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  // redux
  // get Images
  const { data: landscapeImages, isLoading: gettingImage } =
    useGetImagesQuery("landscape");
  // Post Images
  const [uploadImages, { isLoading: uploading, error, isSuccess: uploaded }] =
    useUploadImagesMutation();
  // Delete Image
  const [deleteImages, { isLoading: deleting, error: deleteError }] =
    useDeleteImagesMutation();

  // multiple image input change
  const handleMultipleImage = (event) => {
    const files = [...event.target.files];
    setImages(files);

    const previews = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        previews.push(reader.result);
        if (previews.length === files.length) {
          setImagePreviews(previews);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // Send image to API
  const miltipleImageUpload = async (e) => {
    e.preventDefault();

    if (!images || images.length < 1) {
      toast.error("No image selected!");
      return;
    }

    let formData = new FormData();
    // images = [files]
    Array.from(images).forEach((item) => {
      formData.append("images", item);
    });
    // image_type = "landscape"
    formData.append("image_type", "landscape");

    //Redux Function call
    uploadImages(formData);
  };

  // Cancle Upload
  const cancleUpload = () => {
    setImagePreviews([]);
    setImages([]);
    document.getElementById("cancleModal").click();
  };

  // Delete Image
  const handleDelete = (image_name) => {
    if (!confirm("Delete image?")) return;
    const deleteAttach = {
      image_type: "landscape",
      image_name,
    };
    deleteImages(deleteAttach);
  };

  // handle upload error
  useEffect(() => {
    if (!uploading && error) {
      toast.error(error.data?.message);
    }
    if (!uploading && uploaded) {
      toast.success("Image uploaded success!");
      cancleUpload();
    }
  }, [error, uploaded]);

  // handle delete error
  useEffect(() => {
    if (!deleting && deleteError) {
      toast.error(deleteError.data?.message);
    }
  }, [deleteError]);

  return (
    <section>
      <Toaster />
      {uploading && <Overlay />}
      {/* Modal */}
      <input
        type="checkbox"
        id="landscapeimagemodal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box lg:w-[600px] max-w-5xl">
          <h3 className="font-bold text-lg mb-4">
            Upload landscape images (Maximum 4)
          </h3>
          {/* Preview */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {imagePreviews?.map((preview, index) => (
              <img
                className="border object-contain rounded-md"
                key={index}
                src={preview}
                alt={`Preview ${index}`}
              />
            ))}
          </div>
          <div>
            <form onSubmit={miltipleImageUpload}>
              <input
                type="file"
                multiple
                onChange={handleMultipleImage}
                className="file-input file-input-bordered w-full"
              />
              <div className="flex gap-2 pt-4 justify-end mt-3">
                <a className="btn_black" onClick={cancleUpload}>
                  Cancle
                </a>
                <button type="submit" className="btn_blue">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
        <label
          className="modal-backdrop"
          id="cancleModal"
          htmlFor="landscapeimagemodal"
        >
          Close
        </label>
      </div>
      {/* Dashbard Photos */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>Landscape</li>
        </ul>
      </div>
      <div className="flex items-center justify-between mb-3">
        <h2>Landscapes</h2>
        <label className="btn_blue gap-2" htmlFor="landscapeimagemodal">
          <AiOutlinePlus /> Upload new photo
        </label>
      </div>

      {/* View Images */}
      {gettingImage && <Spinner title="Getting images..." />}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 ">
        {landscapeImages &&
          landscapeImages?.map((image_name) => (
            <div key={image_name} className="relative group">
              <button
                disabled={deleting}
                onClick={() => handleDelete(image_name)}
                className="text-white bg-red-500 opacity-50 group-hover:opacity-100 duration-100 rounded-md p-1 absolute top-0 right-0 disabled:cursor-not-allowed"
              >
                <RxCross2 />
              </button>
              <img
                className="w-full rounded-md"
                src={Image_url("landscape", "small", image_name)}
                alt="Imagees"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Photos;
