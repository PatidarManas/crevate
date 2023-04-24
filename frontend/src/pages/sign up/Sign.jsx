import React, {  useState } from 'react'
import "./Sign.scss"
import { useDispatch, useSelector} from 'react-redux'
import {  register } from '../../redux/action/useraction';
import toast, { Toaster } from 'react-hot-toast';


const Sign = () => {
    const {error,success} = useSelector(state=>state.user);
    const dispatch = useDispatch()
    if(success){
        toast.success("Logged in");
    }
    if(error){
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    const[username,setusername]= useState('');
    const[first,setfirst]= useState('');
    const[last,setlast]= useState('');
    const[pass,setpass]= useState('');
    function submitHandler(e){
        e.preventDefault();
        dispatch(register(username,first,last,pass))
        
    }
    return (
    <div className="sign">
        
        <div className="sign-section">
            <div className="upside">
                <div className="text-login">Create Account</div>
                <div className="line"></div>
            </div>
            <form onSubmit={submitHandler}  className="form">
                <div className="text">First Name</div>
                <input type="text" placeholder='Manas' onChange={e=>setfirst(e.target.value)} name='first'/>
                
                <div className="text">Last Name</div>
                <input type="text" placeholder='Patidar' onChange={e=>setlast(e.target.value)}name='last'/>
                <div className="text">Username</div>
                <div className="text-light">Username should start with letter or '_'. no spaces,#,signs allowed</div>
                <input type="text" placeholder='_manas_patidar' onChange={e=>setusername(e.target.value) }name='username'/>
                <div className="text">Password</div>
                <div className="text-light">Password should attleast 8 characters. remember your password we dont have forget password option now </div>
                <input type="password" placeholder='12345678' onChange={e=>setpass(e.target.value) }name='pass'/>
                <button type='submit' >Submit</button>
            </form>
        </div>
            <div className="btm-text">
                already have an account <a href='/login'>Login</a>
            </div>
            <Toaster/>
    </div>
  )
}

export default Sign