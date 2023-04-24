import React from "react";
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../../redux/action/useraction";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const { error, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const [pass, setpass] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(username, pass));
  }
  if (success) {
    toast.success("Logged in");
  }
  if (error) {
    toast.error(error);
    dispatch({ type: "clearError" });
  }
  return (
    <div className="login">
      <div className="login-section">
        <div className="upside">
          <div className="text-login">Login</div>
          <div className="line"></div>
        </div>
        <form onSubmit={submitHandler} className="form">
          <div className="text">Username</div>
          <input
            type="text"
            placeholder="_manas_patidar"
            onChange={(e) => setusername(e.target.value)}
          />
          <div className="text">Password</div>
          <input
            type="password"
            placeholder="12345678"
            onChange={(e) => setpass(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="btm-text">
        don't have an account <a href="/signup">Create account</a>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
