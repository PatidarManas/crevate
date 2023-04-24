import { createReducer } from "@reduxjs/toolkit";

export const postReducer = createReducer({},{
    newPostRequest:state=>{
        state.loading = true;
    },
    newPostSuccess:(state,action)=>{

        state.loading = false;
        state.message = action.payload.message;
    },
    newPostFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    getprofilepostsRequest:state=>{
        state.loading = true;
    },
    getprofilepostsSuccess:(state,action)=>{

        state.loading = false;
        state.message = action.payload.message;
        state.posts= action.payload
    },
    getprofilepostsFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    likeRequest:state=>{
        state.loading = true;
    },
    likeSuccess:(state,action)=>{

        state.loading = false;
        state.liked= true
    },
    likeFail:(state,action)=>{
        state.loading = false;
        state.liked= false
    },
    
    
})