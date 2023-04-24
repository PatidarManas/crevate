import { createReducer } from "@reduxjs/toolkit";

export const searchReducer = createReducer({},{
    searchuserRequest: state => {
        state.loading = true;
      },
      searchuserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.searchuser = action.payload;
      },
      searchuserFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
    }
)