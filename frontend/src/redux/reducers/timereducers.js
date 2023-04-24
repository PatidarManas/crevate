import { createReducer } from "@reduxjs/toolkit";

export const timeReducer = createReducer({},{

timelineRequest:state=>{
    state.loading = true;
},
timelineSuccess:(state,action)=>{

    state.loading = false;
    state.message = action.payload.message;
    state.timelinepost= action.payload
},
timelineFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
})