import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { gettimelineposts } from "../../redux/action/postaction";

const Timelineposts = ({ user }) => {
  const { timelinepost } = useSelector((state) => state.timepost);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettimelineposts(user._id));
  }, [dispatch]);
  console.log(timelinepost);
  const results = [];
  (timelinepost || []).forEach((post, index) => {
    results.push(<Post post={post} id={post.userid}></Post>);
  });
  results.reverse();
  return <div>{results}</div>;
};

export default Timelineposts;
