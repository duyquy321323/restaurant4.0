import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ForgotPassword.css';

function ForgetPassword(props) {
  const { title, content } = props;
  const [email,setEmail]= useState("");
  const [password, setPassword]= useState("");
  const navigate = useNavigate();
  const handlePasswordReset = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    // Add API logic for resetting the password here
    console.log("Password reset request sent for:", email);
    alert("Password reset link sent to your email!");
  };
 
  return (<div className="login-register-page">
    {/* Left Section */}
    <div className="welcome-section">
      <h1>No Worries.!!</h1>
      <button className="skip-button" onClick={() => navigate('/login')}>
        Take me back.!
      </button>
    </div>

    {/* Right Section */}
    <div className="wrapper">
      <div className="login">
        <h2>Forgot Password ?</h2>
        <p className="subtitle">Please enter your email</p>
        <div className="form-box">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePasswordReset();
            }}
          >
            {/* Email Input */}
            <div className="input-box">
              <input
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Reset Password Button */}
            <button type="submit" style={{ background: "linear-gradient(91deg, #FF6F61, #D61A42)" }}>
              Reset Password
            </button>
          </form>
          {/* Footer Links */}
          <p className="register-link">
            Don't have an account?{" "}
            <a href="#" onClick={() => navigate('/sign-up')}>
              Signup
            </a>
          </p>
          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Support</a>
            <a href="#">Customer Care</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default ForgetPassword;
