import { createReducer } from "@reduxjs/toolkit";

export const followReducer = createReducer(
  {success:false},
  {
    followRequest: (state) => {
      state.loading = true;
    },
    followSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    followFail: (state, action) => {
      state.loading = false;
      state.success = false;
    },
    unfollowRequest: (state) => {
      state.loading = true;
    },
    unfollowSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    unfollowFail: (state, action) => {
      state.loading = false;
      state.success = false;
    },
    clear:(state)=>{
      state.success=false;
    }
  }
);
