import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({},{
  otherUserRequest: state => {
    state.loading = true;
  },
  otherUserSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.otheruser = action.payload;
  },
  otherUserFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
    }
)