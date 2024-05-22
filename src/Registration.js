import React, { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { name, email, password };

    try {
      const response = await axios.post("http://localhost:4500/reg", data);
      if (response.data === "success") {
        alert("Registration successful");
        navigate("/login");
      } else {
        alert("Registration failed, please try again");
      }
    } catch (error) {
      console.error("There was an error!", error);
      alert("An error occurred during registration. Please try again later.");
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="checkbox"
            checked={showPassword}
            onChange={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "199px",
              top: "59%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              height: 13,
              marginTop: "10px"
            }}
          />
          <label>Show password or hide password</label>
        </div>
        <button onClick={handleSubmit}>Register</button>
        <p className="loginsignup-login">
          Already have an account?{" "}
          <span>
            <Link to="/">Login here</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Registration;
