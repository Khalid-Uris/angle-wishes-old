import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authServices } from "../../services/auth";

export const AuthSlice = createSlice({
  name: "authurization",
  initialState: {
    loading: "idle",
    user: null,
    accessToken: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, { payload }) => {
      state.loading = "pending";
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.user = payload.data;
      state.accessToken = payload.access_token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = "rejected";
    });
    builder.addCase(userLogout.pending, (state, { payload }) => {
      state.loading = "pending";
    });
    builder.addCase(userLogout.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.user = payload;
      state.user = null;
    });
    builder.addCase(userLogout.rejected, (state, { payload }) => {
      state.loading = "rejected";
    });
  },
});

export const userLogin = createAsyncThunk(
  "authurization/user",
  async (body) => {
    const response = await authServices.login(body);
    return response;
  }
);

export const userLogout = createAsyncThunk(
  "authorization/userLogout",
  async () => {
    const response = await authServices.logout();
    return response;
  }
);

export const {} = AuthSlice.actions;
export default AuthSlice.reducer;
