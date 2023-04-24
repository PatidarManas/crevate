import React from 'react'
import './Sgn.scss'
const Sgn = ({user,id}) => {
  const link = `/${user._id}`
  
  
  return (
    <div className='sgn'>
        <div className="profile">
            <a href={link} className="img">
                <img src={user.image.url} alt="" />
            </a>
            <div className="name-username">

            <a href={link} className="name">{user.firstname} {user.lastname}</a>
            <a href={link} className="username">{user.username}</a>
            </div>
        </div>
        <div className="follow-btn">
        {(!user.followers.includes(id))?<div className="follow">You dont Follow them</div>:
              <div className="follow">You Follow them</div>}
        </div>
    </div>
  )
}

export default Sgn