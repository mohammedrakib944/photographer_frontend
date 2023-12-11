import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  access_token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return (state = payload);
    },
    logOutUser: () => {
      state = initialState;
      localStorage.removeItem("auth");
    },
  },
});

export const { setUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
