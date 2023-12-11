import { apiSlice } from "./apiSlice";

const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // admin login
    login: builder.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
