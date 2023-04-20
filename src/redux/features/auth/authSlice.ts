import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../../store";
import { Admin } from "@/shared/types";

// Type for our state
export interface AuthState {
  authState: boolean;
  adminToken: string | null;
  error: string | null;
  success: boolean;
  adminInfo: Admin[] | null;
  loading: boolean;
}

// Initial state
const initialState: AuthState = {
  authState: false,
  loading: false,
  adminInfo: null, // for user object
  adminToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setAdminToken(state, action) {
      state.adminToken = action.payload;
    },
    // setAdminInfo(state, action) {
    //   state.adminInfo = action.payload;
    // },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setAuthState, setAdminToken } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;
// export const selectAdminInfo = (state: AppState) => state.auth.adminInfo;
export const selectAdminToken = (state: AppState) => state.auth.adminToken;

export default authSlice.reducer;
