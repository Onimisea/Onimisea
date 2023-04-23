import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../../store";
import { Admin, AuthState } from "@/shared/types";

// Type for our state

// Initial state
const initialState: AuthState = {
  isAuth: false,
  adminInfo: null, // for user object
  adminToken: null, // for storing the JWT
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setAdminToken(state, action) {
      state.adminToken = action.payload;
    },
    setAdminInfo(state, action) {
      state.adminInfo = action.payload;
    },
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

export const { setIsAuth, setAdminToken, setAdminInfo } = authSlice.actions;

export default authSlice.reducer;
