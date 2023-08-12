import { apiSlice } from "./apiSlice";

const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get Images
    getImages: builder.query({
      query: (image_type) => ({
        url: `/api/image/${image_type}`,
        method: "GET",
      }),
      providesTags: ["images"],
    }),

    // Upload Images
    uploadImages: builder.mutation({
      query: (data) => ({
        url: `/api/image`,
        method: "POST",
        body: data,
        formData: true,
        // credentials: "include",
      }),
      invalidatesTags: ["images"],
    }),

    // Delete Images
    deleteImages: builder.mutation({
      query: (data) => ({
        url: "/api/image",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["images"],
    }),
  }),
});

export const {
  useGetImagesQuery,
  useUploadImagesMutation,
  useDeleteImagesMutation,
} = imageApi;
