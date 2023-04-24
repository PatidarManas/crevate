import React from "react";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  followuser,
  loadUser,
  otherUser,
  unfollowuser,
} from "../../redux/action/useraction";
import { useEffect } from "react";
import Allposts from "../../components/posts/allposts";
import { Navigate, useParams } from "react-router-dom";
import Sidebar from "../../components/side header/sidebar";
const Oprofile = () => {
  const { otheruser } = useSelector((state) => state.otheruser);
  const { user, loading } = useSelector((state) => state.user);
  let c = 0;
  let { success } = useSelector((state) => state.followuser);
  console.log("sfd" + success);
  const dispatch = useDispatch();
  if (success) {
    c--;
    dispatch(clear());
  }
  const params = useParams();
  const id = params.id;
  console.log(id);
  useEffect(() => {
    dispatch(loadUser());
    dispatch(otherUser(id));
  }, [dispatch, c, id]);
  function Followhandler() {
    dispatch(followuser(otheruser._id, user._id));
  }
  function Unfollowhandler() {
    dispatch(unfollowuser(otheruser._id, user._id));
  }

  return !loading ? (
    id === user._id ? (
      <>
        <Navigate to={"../profile"} />
      </>
    ) : !otheruser ? (
      <>loading</>
    ) : (
      <div className="profile-section">
        <div className="blank">
          <Sidebar user={user}></Sidebar>
        </div>
        <div className="Profile">
          <div className="profile-upside">
            <div className="pic">
              <img src={otheruser.image.url} alt="" />
            </div>
            <div className="namesandall">
              <div className="name">
                {otheruser.firstname + " " + otheruser.lastname}
              </div>
              <div className="singleline">
                <div className="username">{otheruser.username}</div>
                {!otheruser.followers.includes(user._id) ? (
                  <button className="follow" onClick={Followhandler}>
                    Follow
                  </button>
                ) : (
                  <button className="follow" onClick={Unfollowhandler}>
                    UnFollow
                  </button>
                )}
              </div>
              <div className="details">
                <span className="detail">
                  {otheruser.followers.length} Followers
                </span>
                <span className="detail">
                  {otheruser.following.length} Following
                </span>
              </div>
              <div className="bio">{otheruser.bio}</div>
            </div>
          </div>
          <div className="line"></div>
          <div className="btm">
            <div className="post-text">Posts By {otheruser.username}</div>
            <Allposts user={otheruser}></Allposts>
          </div>
        </div>
      </div>
    )
  ) : (
    <>sn </>
  );
};

export default Oprofile;
