import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { DashboardSlice } from "./features/dashboard";
import { AuthSlice } from "./features/auth";
import { EditSlice } from "./features/editProfile";

const authPersistConfig = {
  key: "auth",
  storage,
};

const dashboardPersistConfig = {
  key: "dashboard",
  storage,
};

const editProfilePersistConfig = {
  key: "editProfile",
  storage,
};

const rootReducer = combineReducers({
  dashboard: persistReducer(dashboardPersistConfig, DashboardSlice.reducer),
  auth: persistReducer(authPersistConfig, AuthSlice.reducer),
  editUser: persistReducer(editProfilePersistConfig, EditSlice.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export default store;

export const persistor = persistStore(store);
