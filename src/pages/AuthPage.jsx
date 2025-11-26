import React from "react";
import "./Style.css";
import Signup from "./Signup";
import UserLogin from "./UserLogin";

function AuthPage() {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <Signup />
      </div>

      <div className="login">
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <UserLogin />
      </div>
    </div>
  );
}

export default AuthPage;
