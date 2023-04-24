import React from "react";

import "./Home.scss";
import Timelineposts from "../../components/posts/timelineposts";
import Sidebar from "../../components/side header/sidebar";
const Home = ({ user }) => {
  return (
    <div className="Home">
      <div className="blank">
        <Sidebar user={user}></Sidebar>
      </div>
      <div className="left">
        <div className="posts-text">Posts</div>
        <Timelineposts user={user}></Timelineposts>
      </div>
      <div className="right">
        <div className="suggestion-text">Suggestions for you</div>
      </div>
    </div>
  );
};

export default Home;
