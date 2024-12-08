import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { login } from '../../redux/action';
import api from './../../api';
import './LoginRegister.css';

function Login(props) {
  
  const { title, content } = props;
  const [action, setAction] = useState('');
  const navigate = useNavigate();
  const [email,setEmail]= useState("");
  const [password, setPassword]= useState("");
  const dispatch= useDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const handleGoogleClick = () => {
    window.open('https://google.com', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com', '_blank');
  };
  const handleGithubClick = () => {
    window.open('https://facebook.com', '_blank');
  };
  const LoginApi = (email,password) => {
    return api.post("users/login", {email,password});
  }
const handleLoginSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  if (!email || !password) {
    toast.error("Email and password are required");
    return;
  }
  try {
    const res = await LoginApi(email, password);
    console.log(res);
    if (res && res.data.token) {
      dispatch(login(res.data));
      // history.back();
      navigate('/');
    } else {
      toast.error("Login failed: Invalid credentials");
    }
  } catch (error) {
    toast.error("Login failed: " + (error.response?.data?.message || error.message));
  }
};
const registerLink =() => {
    setAction(' active')
};
const loginLink =() => {
    setAction('')
};
  return (
    <>
        <div className="login-register-page">
         {/* Bên trái */}
            <div className="welcome-section">
                  <h1>Welcome Back .!</h1>
            <button className="skip-button">Skip the lag?</button>
            </div>
        {/* Bên phải */}
            <div className={`wrapper${action}`}>
                <div className="login">
                <h2>Login</h2>
                <p className="subtitle">Glad you're back.!</p>
                {/* Login Box */}
                <div className="form-box login">
                    <form action="" onSubmit={handleLoginSubmit}>
                        <div className="input-box">
                        <input
                            type="text"
                            placeholder='Username'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password"
                            placeholder='Password'
                            value={password}
                            onChange = {(event) => setPassword(event.target.value)} />
                            <FaLock className='icon'/>
                        </div>
                        <div className="remember-me">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                      </div>
                        <button 
                                type="submit"
                                // className={email && password ? "active" : ""}
                                // disabled={!email || !password}
                                > Login             </button>
                        <div className="forgot-password"  onClick={() => navigate('/forget-password')}>Forgot password?</div>
                        <div className="social-login">
                              <div className="or-divider">
                                  <hr />
                                  <span>Or</span>
                                  <hr />
                                </div>
                              <div className="social-login-group">
                                    <button onClick={handleGoogleClick}>
                                        <FcGoogle className='loginicon' />
                                    </button>
                                    <button onClick={handleFacebookClick}>
                                          <FaFacebook className='loginicon' />
                                    </button>
                                    <button onClick={handleGithubClick}>
                                      <FaGithub className='loginicon' />
                                    </button>
                              </div>
                        </div>
                        </form>
                        <div className="information-link">
                            <div className="register-link">
                                <p>Don't have an account?  <a href="#" onClick={() => navigate('/sign-up')}>Register</a></p>
                            </div>
                            <div className="footer-links">
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Support</a>
                            <a href="#">Customer Care</a>
                          </div>
                      </div>
                </div>
                </div>
                {/* <div className="form-box registration">
                    <form action="">
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input type="text"
                            placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="email"
                            placeholder='Email' required />
                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password"
                            placeholder='Password' required />
                            <FaLock className='icon'/>
                        </div>

                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Already have an account? <a href="#" onClick = {loginLink}>Login</a></p>
                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    </>
  );
}

export default Login;
