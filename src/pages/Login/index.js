import React, { useState } from "react";
import { FaFacebook, FaGithub, FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../redux/action";
import api from "./../../api";
import "./LoginRegister.css";
import { useSnackbar } from "../../components/SnackbarContext";

function Login(props) {
  const [action, setAction] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar();
  const [rememberMe, setRememberMe] = useState(false);
  const handleGoogleClick = () => {
    window.open("https://google.com", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://facebook.com", "_blank");
  };
  const handleGithubClick = () => {
    window.open("https://facebook.com", "_blank");
  };
  const LoginApi = (email, password) => {
    return api.post("users/login", { email, password });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (!email || !password) {
      toast.error("Vui lòng nhập mật khẩu và email");
      return;
    }
    try {
      const res = await LoginApi(email, password);
      if (res && res.data.token) {
        dispatch(login(res.data));
        navigate("/");
        showSnackbar("Đăng nhập thành công");
      }
    } catch (error) {
      if(error.response.data.message){
        showSnackbar(error.response.data.message);
      } else {
        showSnackbar("Lỗi kết nối");
      }
    }
  };
  const registerLink = () => {
    setAction(" active");
  };

  return (
    <>
      <div className="login-register-page">
        <div className="welcome-section">
          <h1>Welcome Back .!</h1>
          <button className="skip-button">Skip the lag?</button>
        </div>
        <div className={`wrapper${action}`}>
          <div className="login">
            <h2>Login</h2>
            <p className="subtitle">Glad you're back.!</p>
            <div className="form-box login">
              <form action="" onSubmit={handleLoginSubmit}>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Username"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <FaLock className="icon" />
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
                <button type="submit"> Login </button>
                <div className="forgot-password">Forgot password?</div>
                <div className="social-login">
                  <div className="or-divider">
                    <hr />
                    <span>Or</span>
                    <hr />
                  </div>

                  <div className="social-login-group">
                    <button onClick={handleGoogleClick}>
                      <FcGoogle className="loginicon" />
                    </button>
                    <button onClick={handleFacebookClick}>
                      <FaFacebook className="loginicon" />
                    </button>
                    <button onClick={handleGithubClick}>
                      <FaGithub className="loginicon" />
                    </button>
                  </div>
                </div>
              </form>
              <div className="information-link">
                <div className="register-link">
                  <p>
                    Don't have an account?{" "}
                    <a href="#" onClick={registerLink}>
                      Register
                    </a>
                  </p>
                </div>
                <div className="footer-links">
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Support</a>
                  <a href="#">Customer Care</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
