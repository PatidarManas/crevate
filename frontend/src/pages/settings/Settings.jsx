import React from "react";
import "./Settings.scss";
import { logoutuser } from "../../redux/action/useraction";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/side header/sidebar";
import toast, { Toaster } from "react-hot-toast";
const Settings = ({ user }) => {
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function logouthandler(e) {
    e.preventDefault();

    toast.promise(dispatch(logoutuser()), {
      loading: "Saving...",
      success: <b>Logout succesful !</b>,
      error: <b>{error}e</b>,
    });
    window.location.reload();
  }
  return (
    <div className="settings">
      <div className="blank">
        <Sidebar user={user}></Sidebar>
      </div>
      <div className="stg-section">
        <div className="upside-text">
          <div className="text">Settings</div>
          <div className="line"></div>
        </div>
        <div className="content">
          <div className="upside">
            <div className="btn">
              <a href="/followers">Manage Followers</a>
            </div>
            <div className="btn">
              <a href="/following">Manage Followings</a>
            </div>
          </div>
          <div className="downside">
            <button onClick={logouthandler} className="btn">
              <div>Logout</div>
            </button>
          </div>
        </div>
      </div>
      <div className="blank"></div>
      <Toaster />
    </div>
  );
};

export default Settings;
