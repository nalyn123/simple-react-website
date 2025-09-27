import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {},
};

const userSice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, data) => {
      state.auth = data;
    },
  },
});

export const { setAuth } = userSice.actions;
export default userSice.reducer;
