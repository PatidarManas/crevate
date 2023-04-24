import React from "react";
import "./follow.scss";
import Sidebar from "../../components/side header/sidebar";
import toast, { Toaster } from "react-hot-toast";

const Followers = ({ user }) => {
  toast.error("Under Development");
  return (
    <div className="main">
      <div className="blank">
        <Sidebar user={user}></Sidebar>
      </div>
      <div className="main-2">
        <h1>Followers</h1>
      </div>
      <div className="blank"></div>
      <Toaster />
    </div>
  );
};

export default Followers;
