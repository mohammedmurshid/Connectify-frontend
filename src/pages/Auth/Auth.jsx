import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);

  const dispatch = useDispatch();

  // handling the inputs
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  // message on password mismatch
  const [confirmPass, setConfirmPass] = useState(true);

  // defining a function to handle the change in the input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // defining a function for form submission and checking the passwords
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignedUp) {
      data.password === data.confirmpassword
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  // function to clear the error message even after switching from sign up to login form
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpassword: "",
    });
  };
  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="appName">
          <h1>Connectify</h1>
          <h6>Connect with the world</h6>
        </div>
      </div>

      {/* Right side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignedUp ? "Sign Up" : "Log In"}</h3>

          {isSignedUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                className="infoInput"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                className="infoInput"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="infoInput"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="infoInput"
              onChange={handleChange}
              value={data.password}
            />
            {isSignedUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                className="infoInput"
                onChange={handleChange}
                value={data.confirmpassword}
              />
            )}
          </div>

          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Passwords do not match
          </span>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignedUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignedUp
                ? "Already have an account? Login!"
                : "Don't have an Account? Sign Up!"}
            </span>
            <button className="button infoButton" type="submit">
              {isSignedUp ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
