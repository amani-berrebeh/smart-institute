import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import LayoutReducer from "../slices/layouts/reducer";
// Authentication
import ForgetPasswordReducer from "../slices/auth/forgetpwd/reducer";
import ProfileReducer from "../slices/auth/profile/reducer";
import DashboardReducer from "../slices/dashboard/reducer";
import authSlice from "features/account/authSlice";
import { accountSlice } from "features/account/accountSlice";
import { permissionSlice } from "features/userPermissions/userPermissionSlice";


export const store = configureStore({
    reducer: { 
    [accountSlice.reducerPath]: accountSlice.reducer,
    [permissionSlice.reducerPath]: permissionSlice.reducer,
      auth: authSlice,
      Layout: LayoutReducer,
      ForgetPassword: ForgetPasswordReducer,
      Profile: ProfileReducer,
      Dashboard: DashboardReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat([
        accountSlice.middleware, 
        permissionSlice.middleware
      ]
        
      );
    },
  });
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  setupListeners(store.dispatch);
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  