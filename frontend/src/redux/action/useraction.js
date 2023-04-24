import axios from "axios";
import { server } from "../store";
export const register =
  (username, firstname, lastname, password) => async (dispatch) => {
    try {
      dispatch({ type: "RegisterRequest" });
      const { data } = await axios.post(
        `${server}/auth/newuser`,
        {
          username: username,
          firstname: firstname,
          lastname: lastname,
          password: password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },

          withCredentials: true,
        }
      );
      dispatch({ type: "RegisterSuccess", payload: data.newuser });
    } catch (error) {
      dispatch({ type: "RegisterFail", payload: error.response.data });
    }
  };
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: "LoginRequest" });
    const { data } = await axios.post(
      `${server}/auth/login`,
      { username: username, password: password },
      {
        headers: {
          "Content-type": "application/json",
        },

        withCredentials: true,
      }
    );
    
    dispatch({ type: "LoginSuccess", payload: data.User });
  } catch (error) {
    dispatch({ type: "LoginFail", payload: error.response.data });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "LogoutRequest" });

    const { data } = await axios.get(
      `${server}/auth/logout`,

      {
        withCredentials: true,
      }
    );
    dispatch({ type: "LogoutSuccess", payload: data.newuser });
  } catch (error) {
    dispatch({ type: "LogoutFail", payload: error.response.data.message });
  }
};
export const loadUser = () => async (dispatch) => {
  
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(
      `${server}/user/me`,

      {
        withCredentials: true,
      }
    );
    dispatch({ type: "loadUserSuccess", payload: data.newuser });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};
export const searchUser = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "searchuserRequest" });

    const { data } = await axios.get(
      `${server}/user/search?keyword=${keyword}`,

      {
        withCredentials: true,
      }
    );
    dispatch({ type: "searchuserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "searchuserFail", payload: error.response.data.message });
  }
};

export const Updateprofile = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "updatRequest" });
    const { data } = await axios.post(
      `${server}/user/update`,
      formdata,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "updateSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "updateFail", payload: error.response.data.message });
  }
};
export const otherUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "otherUserRequest" });

    const { data } = await axios.get(
      `${server}/user/${id}`,

      {
        withCredentials: true,
      }
    );
    dispatch({ type: "otherUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "otherUserFail", payload: error.response.data.message });
  }
};
export async function searchusers(keyword) {
  try {
    const { data } = await axios.get(
      `${server}/user/search?keyword=${keyword}`,

      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    return error;
  }
}
export const logoutuser  = (id) => async (dispatch) => {
  try {
    dispatch({ type: "LogoutRequest" });
    await axios.get(`${server}/auth/logout`, {
      withCredentials: true,
    });
    dispatch({ type: "logoutSuccess" });
  } catch (error) {
    
    dispatch({ type: "logoutFail",payload:error});
  }
}

export const followuser = (id, userid) => async (dispatch) => {
  try {
    dispatch({ type: "followRequest" });

    const { data } = await axios.put(
      `${server}/user/${id}/follow`,
      { currentuserid: userid },
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "followSuccess", payload : data});
  } catch (error) {
    dispatch({ type: "followFail", payload: error });
  }
};
export const unfollowuser = (id, userid) => async (dispatch) => {
  try {
    dispatch({ type: "unfollowRequest" });

    const { data } = await axios.put(
      `${server}/user/${id}/unfollow`,
      { currentuserid: userid },
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "unfollowSuccess",payload : data});
  } catch (error) {
    dispatch({ type: "unfollowFail", payload: error });
  }
};

export const clear = ()=>async dispatch=>{
  dispatch({type:"clear"})
  window.location.reload()
}