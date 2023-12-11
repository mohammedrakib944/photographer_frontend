import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/secret";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: async (headers) => {
      const auth = JSON.parse(localStorage.getItem("auth"));
      if (auth) {
        headers.set("Authorization", `Bearer ${auth.access_token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 600, // 10min
  tagTypes: ["images", "profile"],
  endpoints: () => ({}),
});
