import { apiSlice } from "./apiSlice";

const profileImage = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get Images
    getProfileImages: builder.query({
      query: () => ({
        url: `/api/image/profile`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),

    // Upload Images
    uploadProfileImages: builder.mutation({
      query: (data) => ({
        url: `/api/image/profile`,
        method: "POST",
        body: data,
        formData: true,
        credentials: "include",
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const { useGetProfileImagesQuery, useUploadProfileImagesMutation } =
  profileImage;
