 import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userreducer";
import { postReducer } from "./reducers/postreducer";
import { searchReducer } from "./reducers/searchreducer";
import { timeReducer } from "./reducers/timereducers";
import { otherReducer } from "./reducers/otherreducer";
import { followReducer } from "./reducers/followReducers";

 export const server = "http://localhost:5000"
 const store = configureStore({
    reducer:{
      user: userReducer,
      post:postReducer,
      searchusers:searchReducer,
      timepost:timeReducer,
      otheruser:otherReducer,
      followuser:followReducer,
    }
 });

 export default store;

 