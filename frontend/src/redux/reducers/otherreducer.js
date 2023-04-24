import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({load:true},{
  otherUserRequest: state => {
    state.load = true;
  },
  otherUserSuccess: (state, action) => {
    state.load = false;
    state.isAuthenticated = true;
    state.otheruser = action.payload;
  },
  otherUserFail: (state, action) => {
    state.load = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
    }
)