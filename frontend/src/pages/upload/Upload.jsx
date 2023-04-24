import React from 'react'
import "./Upload.scss"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { uploadpost } from '../../redux/action/postaction';
import Sidebar from '../../components/side header/sidebar';
const Upload = ({user}) => {
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');

  const dispatch = useDispatch();
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(file);
    };
  };
  const submitHandler = e => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('caption', caption);
    myForm.append('userid',user._id);
    myForm.append('file', image);
    myForm.append('username', user.username);
    myForm.append('userurl', user.image.url);
    toast.promise(
      dispatch(uploadpost(myForm)),
       {
         loading: 'Saving...',
         success: <b>Uploaded succesful !</b>,
         error: <b>Could not save check file size</b>,
       }
     );
  };
  return (
    <div className="upload">
        <div className="blank">
        <Sidebar user={user}></Sidebar>
        
        </div>
        <form  onSubmit={submitHandler} className="content">
        <div className="upside-text">
            <div className="text">Upload(New Post)</div>
            <div className="line"></div>
        </div>
        <div className="form">
        <div className="text">Choose image</div>
            <div className="note">Note: Upload a image under 5Mb</div>
        <input type="file" accept="image/*" onChange={changeImageHandler} required/>
        <div className="text">Caption:</div>
        <textarea name="paragraph_text" cols="25" rows="10" onChange={e => setCaption(e.target.value)}></textarea>
        <button >Submit</button>
        </div>
        </form>
        <div className="blank"></div>
        <Toaster/>
    </div>
  ) 
}

export default Upload