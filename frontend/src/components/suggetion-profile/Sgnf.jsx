import React, { useEffect } from 'react'
import './Sgn.scss'
import { useDispatch, useSelector } from 'react-redux';
import {  otherUser } from '../../redux/action/useraction';
const Sgnf = ({id}) => {
  const { otheruser,load } = useSelector((state) => state.otheruser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(otherUser(id));
  }, [dispatch]);
  return load ? <>loading</>: (
    <div className='sgn'>
        <div className="profile">
            <div className="img">
                <img src={otheruser.image.url} alt="" />
            </div>
            <div className="name-username">

            <div className="name">{otheruser.firstname} {otheruser.lastname}</div>
            <div className="username">{otheruser.username}</div>
            </div>
        </div>
        <div className="follow-btn">
            <a href=''>Follow</a>
        </div>
    </div>
  )
}

export default Sgnf