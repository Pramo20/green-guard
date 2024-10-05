import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom for v6
import "./Login.css";
import * as localStorage from "local-storage";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const LoginSignup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const adminLogin = async () => {
  //   try {
  //     const body = {
  //       username: username,
  //       password: password,
  //     };
  //     console.log(body);
  //     localStorage.set("login-credentials", body);
  //     const response = await axios.get("http://localhost:3000/testing")
  //     console.log(response)
  //     navigate('/second-page')

  //   } catch (error) {
  //     console.log(error);
  //     window.alert(
  //       "Error in signing up the admin portal please try again later"
  //     );
  //   }
  // };

  const login = async () => {
    try {
      const body = {
        username: username,
        password: password,
      };
      const response = await axios.post(BASE_URL + "/admin/login", body, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      await localStorage.set("authToken", response.data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
      window.alert(
        "Error in signing up the admin portal please try again later"
      );
    }
  };
  const adminLogin = () => {
    if (username === "pramo" && password === "pramo") {
      navigate("/home");
    } else {
      window.alert("Invalid credentials");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className="submit-container">
        <button onClick={login}>Login</button> {/* Add onClick event */}
      </div>
    </div>
  );
};

export default LoginSignup;
