import React, { useEffect, useState } from "react";
import "./Search.scss";
import { MdOutlinePersonSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/action/useraction";
import Sgnall from "../../components/suggetion-profile/sgnall";
import Sidebar from "../../components/side header/sidebar";
const Search = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  const [keyword, setkeyword] = useState("");
  return isAuthenticated ? (
    <div className="search">
      <div className="blank">
        <Sidebar user={user}></Sidebar>
      </div>
      <div className="search-section">
        <div className="upside">
          <input
            name="search"
            placeholder="Search username"
            className="input-btn"
            autoFocus
            onChange={(e) => setkeyword(e.target.value)}
          ></input>
          <div>
            <MdOutlinePersonSearch size={30} color={"white"} />
          </div>
        </div>
        <div className="line"></div>
        <div className="btm">
          {keyword !== "" ? (
            <Sgnall keyword={keyword} id={user._id}></Sgnall>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="blank"></div>
    </div>
  ) : (
    <>loader</>
  );
};

export default Search;
