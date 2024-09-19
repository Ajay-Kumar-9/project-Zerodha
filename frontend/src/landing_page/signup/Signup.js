import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./Signup.css";
import { handlError } from "../../utils";
import { handleSuccess } from "../../utils";

export default function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //input handler

  const handleChange = (e) => {
    const { name, value } = e.target;

    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };
  // console.log('login info -> ',  signupInfo);

  // form submit handler
  const handleSignup = async (e) => {
    e.preventDefault();
    const { username, email, password } = signupInfo;

    if (!username || !email || !password) {
      return handlError("name, email and  password are required");
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      // console.log("debug ", result);
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
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
        <h2 className="Title">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="input">
            <label htmlFor="name"> Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              autoFocus
              placeholder="Enter your name"
              value={signupInfo.username}
            ></input>
          </div>

          <div className="input">
            <label htmlFor="email"> email</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
            ></input>
          </div>

          <div className="input">
            <label htmlFor="password"> Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={signupInfo.password}
            ></input>
          </div>

          <button type="submit">Signup</button>
          <span>
            Already have an account ?
            <Link to="/login" className="Link">
              Login
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
