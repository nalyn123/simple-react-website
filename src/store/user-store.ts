import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginProps, UserStoreProps } from "./interface/user-store.interface";
import { SignJWT, jwtVerify } from "jose";
const secret = new TextEncoder().encode("jwt-secret");

const initialState: UserStoreProps = {
  auth: null,
};

export const fetchLogin = createAsyncThunk(
  "users/fetchLogin",
  async ({ email, password }: LoginProps) => {
    const data = {
      email,
      firstname: "First",
      lastname: "Last",
    };

    const token = await new SignJWT(data)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(secret);

    localStorage.setItem("token", token);

    return data;
  }
);

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const token = localStorage.getItem("token") || "";
  const { payload } = await jwtVerify(token, secret);
  return payload;
});

const userSice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.auth = action.payload;
      });
  },
});

// export const { setAuth } = userSice.actions;
export default userSice.reducer;
