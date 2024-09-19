import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./Signup.css";
import { handlError } from "../../utils";
import { handleSuccess } from "../../utils";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

//   const navigate = useNavigate();

  //input handler

  const handleChange = (e) => {
    const { name, value } = e.target;

    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };
  // console.log('login info -> ',  signupInfo);

  // form submit handler
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password, username } = loginInfo;

    if ( !email || !password) {
      return handlError(" email and  password are required");
    }
    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      // console.log("debug ", result);
      const { success, message, error , jwtToken, username } = result;
      console.log("debug result", result);
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token" ,jwtToken);
        localStorage.setItem("loggedInUser", username);

        window.location.href = "http://localhost:3001/"; 

        // setTimeout(() => {
        //   navigate("/login");
        // }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handlError(details);
      } else if (!success) {
        handlError(message);
      }
      console.log(result);
    } catch (err) {
      handlError(err);
    }
  };

  return (
    <div className="form-main-container">
      <div className="form_container">
        <h2 className="Title">Login</h2>
        <form onSubmit={handleLogin}>


          <div className="input">
            <label htmlFor="email"> email</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Enter your email"
              value={loginInfo.email}
            ></input>
          </div>

          <div className="input">
            <label htmlFor="password"> Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginInfo.password}
            ></input>
          </div>

          <button type="submit">Signup</button>
          <span>
            Doesn't have an account ?
            <Link to="/signup" className="Link">
              Signup
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

