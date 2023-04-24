import React from "react";
import "./sidebar.scss";
import { CiHome } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <div className="up">
        {" "}
        <a href={`/crevate`} className="crevate">
          Crevate
        </a>
        <div className="profile">
          <a className="img" href={`/profile`}>
            <img src={user.image.url} alt="" />
          </a>
          <a
            className="name-username"
            href={`/profile`}
          >
            <div className="name">{user.firstname + " " + user.lastname}</div>
            <div className="username">{user.username}</div>
          </a>
        </div>
      </div>
      <div className="down">
        <div className="buttons">
          <div className="btn">
            <a href={`/`}>
              <CiHome />
              <h1>Home</h1>
            </a>
          </div>
          <div className="btn">
            <a href={`/search`}>
              <BiSearchAlt />
              <h1>Search</h1>
            </a>
          </div>
          <div className="btn">
            <a href={`/upload`}>
              <AiOutlinePlus />
              <h1>New Post</h1>
            </a>
          </div>
          <div className="btn">
            <a href={`/update`}>
              <MdOutlinePublishedWithChanges />
              <h1>Update Profile</h1>
            </a>
          </div>
        </div>
        <div className="setting-btn">
          <a href={`/settings`}>
            <FiSettings />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
