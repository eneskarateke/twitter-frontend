import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../actions";

import TwitterLogo from "../logos/twitter-logo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const handleRegisterNavigation = () => {
    navigate("/register");
  };
  const handleLogoClick = () => {
    navigate("/");
  };

  function handleLogin() {
    const userData = { email, password };

    axios
      .post("http://localhost:8080/profile/login", userData)
      .then((response) => {
        if (response.data.token) {
          console.log("Login successful:", response.data);
          dispatch(setToken(response.data.token));
          navigate("/feed");
        } else {
          console.error("Login failed: No token received");
          alert("Login failed");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Login failed");
      });
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 60,
        background: "white",
        justifyContent: "center",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <div style={{ width: 450, height: 476, position: "relative" }}>
        <img
          style={{
            width: 50,
            height: 41,
            left: 0,
            top: 0,
            position: "absolute",
            cursor: "pointer",
          }}
          src={TwitterLogo}
          alt="Twitter Logo"
          onClick={handleLogoClick}
        />
        <div
          style={{
            left: 9,
            top: 77,
            position: "absolute",
            color: "black",
            fontSize: 42,
            fontFamily: "Roboto",
            fontWeight: "900",
            wordWrap: "break-word",
          }}
        >
          Log in to Twitter
        </div>
        <div
          style={{
            width: 450,
            height: 70,
            left: 0,
            top: 162,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 450,
              height: 70,
              left: 0,
              top: 0,
              position: "absolute",
              background: "white",
              borderRadius: 6,
              border: "0.50px rgba(0, 0, 0, 0.20) solid",
            }}
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{
              width: 670,
              height: 70,
              left: 0,
              top: 0,
              position: "absolute",
              borderRadius: 6,
              border: "0.50px rgba(0, 0, 0, 0.20) solid",

              outline: "none",
              fontSize: 18,
              fontFamily: "Segoe UI",
            }}
            placeholder="Email"
          />
        </div>
        <div
          style={{
            width: 450,
            height: 70,
            left: 0,
            top: 257,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 450,
              height: 70,
              left: 0,
              top: 0,
              position: "absolute",
              background: "white",
              borderRadius: 6,
              border: "0.50px rgba(0, 0, 0, 0.20) solid",
            }}
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: 670,
              height: 70,
              left: 0,
              top: 0,
              position: "absolute",
              borderRadius: 6,
              border: "0.50px rgba(0, 0, 0, 0.20) solid",

              outline: "none",
              fontSize: 18,
              fontFamily: "Segoe UI",
            }}
            placeholder="Password"
          />
        </div>
        <div
          style={{
            width: 450,
            height: 60,
            left: 0,
            top: 352,
            position: "absolute",
            cursor: "pointer",
          }}
          onClick={handleLogin}
        >
          <div
            style={{
              width: 450,
              height: 60,
              left: 0,
              top: 0,
              position: "absolute",
              background: "#1DA1F2",
              borderRadius: 76,
            }}
          />
          <div
            style={{
              left: 198,
              top: 18,
              position: "absolute",
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontFamily: "Segoe UI",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Log In
          </div>
        </div>
        <div
          style={{
            left: 0,
            top: 452,
            position: "absolute",
            color: "#1DA1F2",
            fontSize: 18,
            fontFamily: "Segoe UI",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Forgot password?
        </div>
        <div
          style={{
            left: 309,
            top: 452,
            position: "absolute",
            textAlign: "right",
            color: "#1DA1F2",
            fontSize: 18,
            fontFamily: "Segoe UI",
            fontWeight: "400",
            wordWrap: "break-word",
            cursor: "pointer",
          }}
          onClick={handleRegisterNavigation}
        >
          Sign up to Twitter
        </div>
      </div>
    </div>
  );
}
