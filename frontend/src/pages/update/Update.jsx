import React from "react";
import "./Update.scss";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Updateprofile } from '../../redux/action/useraction';
import Sidebar from "../../components/side header/sidebar";
import toast, { Toaster } from 'react-hot-toast';
const Update = ({user}) => {
  const {upsuccess} = useSelector(state=>state.user);
  if(upsuccess){
    window.location.reload();
  }
  const dispatch = useDispatch();
  const [img, setImage] = useState("");
  const [bio, setbio] = useState(user && user.bio ? user.bio : "");
  const [first, setfirst] = useState(user && user.firstname ? user.firstname : "");
  const [last, setlast] = useState(user && user.lastname ? user.lastname : "");
  const [username, setusername] = useState(user && user.username ? user.username : "");
  const [dob, setdob] = useState(user && user.dob ? user.dob : new Date());

  
  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(file);
    };
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("username", username);
    myForm.append("firstname", first);
    myForm.append("lastname", last);
    myForm.append("bio", bio);
    myForm.append("dob", dob);
    myForm.append("file",img );
    myForm.append("id",user._id)
    toast.promise(
      dispatch(Updateprofile(myForm)),
      
       {
         loading: 'Saving...',
         success: <b>Settings saved!</b>,
         error: <b>Could not save check file size</b>,
       }
     );
  };
  return (
    <div className="upload">
      <div className="blank">
        <Sidebar user={user}></Sidebar>
      </div>
      <form onSubmit={submitHandler} className="content">
        <div className="upside-text">
          <div className="text">Update Profile</div>
          <div className="line"></div>
        </div>
        <div className="form">
          <div className="text">Choose profile image</div>
          <div className="note">Note: Upload a square image only and under 5Mb</div>
          <input
            type="file"
            accept="image/*"
            onChange={changeImageHandler}
            
          />
          <div className="text">First name:</div>
          <input
          className="input-text"
            name="paragraph_text"
            value={first}
            onChange={(e) => setfirst(e.target.value)}
          ></input>
          <div className="text">Last name:</div>
          <input
          className="input-text"
            name="paragraph_text"
            value={last}
            onChange={(e) => setlast(e.target.value)}
          ></input>
          <div className="text">Username:</div>
          <input
          className="input-text"
            name="paragraph_text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          ></input>
          <div className="text">Bio</div>
          <textarea
            className="input-bio"
            rows={25}
            cols={20}
            value={bio}
            onChange={(e) => setbio(e.target.value)}
          ></textarea>
          <div className="text">Date Of Birth</div>
          <input className="input-date" type="date" value={dob} onChange={(e) => setdob(e.target.value)}></input>
          
          <button className="btn">Submit</button>
        </div>
      </form>
      <div className="blank"></div>
      <Toaster/>
    </div>
  ) 
};

export default Update;
