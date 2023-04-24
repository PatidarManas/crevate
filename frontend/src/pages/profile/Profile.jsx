import React from "react";
import "./Profile.scss";
import Allposts from "../../components/posts/allposts";
import Sidebar from "../../components/side header/sidebar";
const Profile = ({user}) => {
  return (
    <div className="profile-section">
      <div className="blank">
        <Sidebar user={user}></Sidebar>
      </div>
      <div className="Profile">
        <div className="profile-upside">
          <div className="pic">
            <img src={user.image.url} alt="" />
          </div>
          <div className="namesandall">
            <div className="name">{user.firstname + " " + user.lastname}</div>
            <div className="singleline">
            <div className="username">{user.username}</div>
            <a href="/update"><button className="Edit">Edit</button></a>
            </div>
            <div className="details">
              <span className="detail">{user.followers.length} Followers</span>
              <span className="detail">{user.following.length} Following</span>
            </div>
            <div className="bio">{user.bio}</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="btm">
          <div className="post-text">Posts By {user.username}</div>
          <Allposts user={user}></Allposts>
        </div>
      </div>
      <div className="blank"></div>
    </div>
  ) 
};

export default Profile;
