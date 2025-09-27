import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthProps,
  InputProps,
  LoginProps,
  UserStoreProps,
} from "./interface/user-store.interface";
import { SignJWT, jwtVerify } from "jose";
import { login } from "@utils/enum";
import { RootState } from "./store";
import { CommonUtils } from "@utils/common-utils";
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

    await CommonUtils.setToken(data);
    return data;
  }
);

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  try {
    const payload = await CommonUtils.getDataFromToken();
    return payload;
  } catch (error) {
    return {};
  }
});

export const fetchUserUpdate = createAsyncThunk<
  AuthProps,
  InputProps,
  { state: RootState }
>("users/fetchUserUpdate", async ({ type, value }: InputProps, thunkAPI) => {
  const state = thunkAPI.getState()?.user;
  const data = {
    ...state?.auth,
    [type ?? ""]: value,
  };

  await CommonUtils.setToken(data);
  return data;
});

const userSice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogout: (state) => {
      localStorage.removeItem(login.TOKEN);
      state.auth = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(fetchUserUpdate.fulfilled, (state, action) => {
        state.auth = action.payload;
      });
  },
});

export const { setLogout } = userSice.actions;
export default userSice.reducer;
