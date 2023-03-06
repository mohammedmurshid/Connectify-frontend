import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="appName">
          <h1>Connectify</h1>
          <h6>Connect with the world</h6>
        </div>
      </div>

      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Login</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Password"
            name="password"
            className="infoInput"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account? Sign Up!
          </span>
          <button className="button infoButton" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            className="infoInput"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Password"
            name="password"
            className="infoInput"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirmpassword"
            className="infoInput"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account? Login!
          </span>
          <button className="button infoButton" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
