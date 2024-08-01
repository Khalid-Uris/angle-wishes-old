import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { editProfile } from "../../services/edit_profile";

export const EditSlice = createSlice({
  name: "EditProfile",
  initialState: {
    loading: "idle",
    userProfile: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state, { payload }) => {
      state.loading = "pending";
    });
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.userProfile = payload;
    });
    builder.addCase(getUserData.rejected, (state, { payload }) => {
      state.loading = "rejected";
    });
  },
});

export const getUserData = createAsyncThunk(
  "EditProfile/getUserData",
  async () => {
    const response = await editProfile.getUserEditDetail();
    return response?.data;
  }
);

export const {} = EditSlice.actions;

export default EditSlice.reducer;
