import React from "react";
import "./Post.scss";
import { AiFillHeart } from "react-icons/ai";
import { likepost } from "../../redux/action/postaction";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
const Post = ({ post, id }) => {
  const {liked}= useSelector(state=>state.post)
  if(liked){
    window.location.reload();
  }
  const dispatch = useDispatch();
  function Likehandler() {
    toast.promise(
      dispatch(likepost(id, post._id)),
       {
         loading: 'Saving...',
         success: "successful",
         error: <b>Could not save try again</b>,
       }
     );
  }

  return (
    <div className="post">
      <div className="upside">
        <a className="profilepic" href={`/${id}`}>
          <img src={post.userurl} alt="" onClick="" />
        </a>
        <a className="name" href={`/${id}`}>
          {post.username}
        </a>
      </div>
      <div className="post-img">
        <img src={post.image.url} alt="" />
      </div>
      <div className="downside">
        <div className="like-btn">
          <div>
            <AiFillHeart
              fill={post.likes.includes(id) ? "red" : "white"}
              size={25}
              onClick={Likehandler}
            />
          </div>
        </div>
        <div className="caption">
          <div className="username">{post.username} :</div>
          <div className="caption-text">{post.caption}</div>
        </div>
      </div>
      <div className="btmline"></div>
      <Toaster/>
    </div>
  );
};

export default Post;
