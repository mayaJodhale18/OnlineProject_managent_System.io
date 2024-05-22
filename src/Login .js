import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4500/login', { email, password });
      console.log(response.data);

      if (response.data === "success") {
        alert("Login successful");
        navigate("/list");
        window.location.reload();
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("There was an error!", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <form onSubmit={handleSubmit}>
          <h1>Login Page</h1>
          <div className="loginsignup-fields">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button>Login</button>
          <p className="loginsignup-login">
            <Link to="/reg">Register yourself</Link> <span></span>
          </p>
          <div className="loginsignip-agree">
            <input type="checkbox" />
            <p>By continuing I agree to terms of use & privacy policy.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
