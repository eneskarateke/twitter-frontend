import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TwitterLogo from "../logos/twitter-logo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  function handleLogin() {
    const userData = { email, password };

    axios
      .post("http://localhost:8080/profile/login", userData) // Change the URL to your login endpoint
      .then((response) => {
        console.log("Login successful:", response.data);
        navigate("/feed");
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
          }}
          src={TwitterLogo}
          alt="Twitter Logo"
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
          <div
            style={{
              left: 20,
              top: 23,
              position: "absolute",
              color: "rgba(0, 0, 0, 0.60)",
              fontSize: 18,
              fontFamily: "Segoe UI",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Email address
          </div>
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
          <div
            style={{
              left: 20,
              top: 23,
              position: "absolute",
              color: "rgba(0, 0, 0, 0.60)",
              fontSize: 18,
              fontFamily: "Segoe UI",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Password
          </div>
        </div>
        <div
          style={{
            width: 450,
            height: 60,
            left: 0,
            top: 352,
            position: "absolute",
          }}
          onClick={handleLogin} // Trigger the login function on click
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
          }}
          onClick={handleRegisterNavigation}
        >
          Sign up to Twitter
        </div>
      </div>
    </div>
  );
}
