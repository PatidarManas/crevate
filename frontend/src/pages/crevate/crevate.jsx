import React from "react";
import "./crevate.scss";

const Crevate = () => {
  return (
    <div className="main">
      <div className="t1">
        <div className="heading">Crevate</div>
        <div className="sub">Your own social media app</div>
      </div>
      <div className="disc">
        Crevate is a social media Web application which comes with Variety of
        features
      </div>
      <a href={`../`}>
        <button className="btn">Procide to Website</button>
      </a>
      <div className="features">
        <h1>Features:</h1>
        * Login/Signup using Tokens
        <br />
        * Follow/Unfollow People
        <br />
        * Create Post
        <br />
        * Live Profile Search
        <br />
        * Update Profile
        <br />
        * Logout, Timeline posts, Like/Dislike post
        <br />
      </div>
      <div className="manas">
        <h2>Designed and Developed By Manas Patidar</h2>
        <a href="https://manaspatidar.netlify.app/">check portfolio</a>
      </div>
    </div>
  );
};

export default Crevate;
