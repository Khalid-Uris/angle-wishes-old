import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { folder } from "../../services/folder";

export const DashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState: {
    cardDetail: [],
    loading: "idle",
    userCardContent: [],
    userMemories: [],
  },
  reducers: {
    // updateCardData: (state, action) => {
    //   return {
    //     ...state,
    //     cardDetail: action.payload,
    //   };
    // },
    removeCategory: (state, action) => {
      const folderDeleted = state.cardDetail.filter(
        (folder) => folder.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFolder.pending, (state, { payload }) => {
      state.loading = "pending";
    });
    builder.addCase(getFolder.fulfilled, (state, { payload }) => {
      state.loading = "pending";
      state.cardDetail = payload?.data;
    });
    builder.addCase(getFolder.rejected, (state, { payload }) => {
      state.loading = "rejected";
    });
    builder.addCase(getSubFolderContent.pending, (state, { payload }) => {
      state.loading = "pending";
    });
    builder.addCase(getSubFolderContent.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.userCardContent = payload.data.children;
    });
    builder.addCase(getSubFolderContent.rejected, (state, { payload }) => {
      state.loading = "rejected";
    });
    builder.addCase(getUserMemories.pending, (state, { payload }) => {
      state.loading = "pending";
    });
    builder.addCase(getUserMemories.fulfilled, (state, { payload }) => {
      state.userMemories = payload.data;
    });
    builder.addCase(getUserMemories.rejected, (state, { payload }) => {
      state.userMemories = "Rejected";
    });
  },
});

export const getFolder = createAsyncThunk(
  "dashboardSlice/getFolder",
  async () => {
    const response = await folder.getFolder();
    return response;
  }
);

export const getSubFolderContent = createAsyncThunk(
  "dashboardSlice/getSubFolderContent",
  async (id) => {
    const response = await folder.getFolderWIthContent(id);
    return response;
  }
);

export const getUserMemories = createAsyncThunk(
  "dashboardSlice/getUserMemories",
  async () => {
    const response = await folder.getMemories();
    return response;
  }
);

export const { updateCardData, removeCategory } = DashboardSlice.actions;
export default DashboardSlice.reducer;
