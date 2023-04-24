import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getprofileposts } from "../../redux/action/postaction";

const Allposts = ({ user }) => {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getprofileposts(user._id));
  }, [dispatch]);

  const results = [];
  (posts || []).forEach((post, index) => {
    results.push(<Post post={post} id={user._id}></Post>);
  });
  results.reverse();
  return <div>{results}</div>;
};

export default Allposts;
