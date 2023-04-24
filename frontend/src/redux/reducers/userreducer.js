import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({isAuthenticated:false,loading:true},{
    RegisterRequest:state=>{
        state.loading = true;
    },
    RegisterSuccess:(state,action)=>{

        state.loading = false;
        state.isAuthenticated=true;
        state.success = true;
        state.message = action.payload;
        state.user = action.payload;
    },
    RegisterFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated=false;
        state.success = false;
        state.error = action.payload;
    },
    LoginRequest:state=>{
        state.loading = true;
    },
    LoginSuccess:(state,action)=>{

        state.loading = false;
        state.isAuthenticated=true;
        state.message = action.payload.message;
        state.user = action.payload;
    },
    LoginFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated=false;
        state.error = action.payload;
    },
    updateRequest:state=>{
        state.loading = true;
    },
    updateSuccess:(state,action)=>{

        state.loading = false;
        state.isAuthenticated=true;
        state.upsuccess=true;
        state.message = action.payload.message;
    },
    updateFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated=false;
        state.upsuccess=false;
        state.error = action.payload;
    },
    LogoutRequest:state=>{
        state.loading = true;
    },
    LogoutSuccess:(state)=>{

        state.loading = false;
        state.isAuthenticated=false;
        state.logoutsuccess=true;
    },
    LogoutFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated=true;
        state.error = action.payload;
        state.logoutsuccess=true;
    },
    loadUserRequest: state => {
        state.loading = true;
      },
      loadUserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      },
      loadUserFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
    
      searchuserRequest: state => {
        state.loading = true;
      },
      searchuserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.searchusers = action.payload;
      },
      searchuserFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },

    clearError:(state)=>{
        state.error=null;
    },
    clearmessage:(state)=>{
        state.message=null;
    }
})