import React, { useContext, useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/storeContext';
import axios from 'axios';

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (currState === "Sign Up" && !formData.name)) {
      alert("Please fill all fields");
      return;
    }

    const endpoint = currState === "Login" ? "/api/user/login" : "/api/user/register";
    const apiUrl = `${url}${endpoint}`;

    try {
      console.log("Sending request to:", apiUrl);
      const response = await axios.post(apiUrl, formData, {
        headers: { "Content-Type": "application/json" }
      });

      console.log("API Response:", response.data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        alert(`${currState} Successful!`);
        setShowLogin(false);
      } else {
        alert(response.data.message || "Operation failed");
      }
    } catch (error) {
      console.error("Request Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={handleSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input name='name' onChange={handleChange} value={formData.name} type="text" placeholder='Your Name' required />
          )}
          <input name='email' onChange={handleChange} value={formData.email} type="email" placeholder='Your Email' required />
          <input name='password' onChange={handleChange} value={formData.password} type="password" placeholder='Password' required />
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        {currState === 'Login' ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;