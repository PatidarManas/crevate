import React, { useEffect } from "react";
import { searchUser } from "../../redux/action/useraction";
import Sgn from "./Sgn";
import { useDispatch, useSelector } from "react-redux";

const Sgnall = ({ keyword, id }) => {
  keyword.trim();
  keyword = keyword.replace(/ +/g, "");
  const { searchuser } = useSelector((state) => state.searchusers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUser(keyword));
  }, [dispatch, keyword]);
  return (searchuser || []).map((user) => {
    if (user._id !== id) {
      return <Sgn user={user} id={id} />;
    } else return <></>;
  });
};

export default Sgnall;
