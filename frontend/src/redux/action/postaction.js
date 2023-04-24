import axios from "axios";
import { server } from "../store";

export const uploadpost = formdata => async dispatch => {
    try {
        dispatch({ type: 'newPostRequest' });
        
        const { data } = await axios.post(`${server}/post/newpost`, formdata, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
    
          withCredentials: true,
        });
    
        dispatch({ type: 'newPostSuccess', payload: data });
      } catch (error) {
        dispatch({ type: 'newPostFail', payload: error.response.data.message });
      }
}

export const getprofileposts= (userid) =>async dispatch => {
  try {
      dispatch({ type: 'getprofilepostsRequest' });
      const {data} = await axios.put(`${server}/post/profileposts`, {"userid":userid}, {
      
  
        withCredentials: true,
      });
      dispatch({ type: 'getprofilepostsSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'getprofilepostsFail', payload: error.response.data.message });
    }
}
export const gettimelineposts= (userid) =>async dispatch => {
  try {
      dispatch({ type: 'timelineRequest' });

      const {data} = await axios.put(`${server}/post/timeline`, {"id":userid}, {
      
  
        withCredentials: true,
      });
      dispatch({ type: 'timelineSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'timelineFail', payload: error.response.data.message });
    }
}

export const likepost =(userid,id) =>async dispatch =>{
  try{
    dispatch({ type: 'likeRequest' });
     await axios.put(`${server}/post/like`, {"userid":userid,"id":id }, {
      
  
        withCredentials: true,
      });
      dispatch({ type: 'likeSuccess'});
    } catch (error) {
      dispatch({ type: 'likeFail'});
    }
}