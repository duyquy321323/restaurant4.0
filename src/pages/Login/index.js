import axios from "axios";
import React, { useState } from 'react';
import { FaEnvelope, FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import './LoginRegister.css';


function Login(props) {
  const { title, content } = props;
  const [action, setAction] = useState('');
  const navigate = useNavigate();
  const [email,setEmail]= useState("");
  const [password, setPassword]= useState("");
  const LoginApi = (email,password) => {
    return axios.post("users/login", {email,password});
  }
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password){
      toast.error("Email/Password is required");
      return;
    }
    let res = await LoginApi(email,password);
    if (res && res.toke) {
        localStorage.setItem ("token", res.token)
        navigate('/')
    }
        
 };
 
// const handleLoginSubmit = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     if (!email || !password) {
//       toast.error("Email and password are required");
//       return;
//     }
//     try {
//       const res = await LoginApi(email, password); 
//       if (res && res.token) {
//         localStorage.setItem("token", res.token); 
//         navigate('/'); 
//       } else {
//         toast.error("Login failed: Invalid credentials");
//       }
//     } catch (error) {
//       toast.error("Login failed: " + (error.response?.data?.message || error.message));
//     }
//   };
  const registerLink =() => {
      setAction(' active')
  };
  const loginLink =() => {
      setAction('')
  };
  return (
    <>
        <div className="login-register-page">
            <div className={`wrapper${action}`}>
                <div className="form-box login">
                    <form action="" onSubmit={handleLoginSubmit}>
                        <h1>Login</h1>
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

                        <button 
                                type="submit"
                                className={email && password ? "active" : ""}
                                disabled={!email || !password}> Login             </button>
                                                        
                        <div className="register-link">
                            <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                        </div>
                    </form>
                </div>

                <div className="form-box registration">
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
                </div>
            </div>
        </div>
    </>
  );
}

export default Login;
