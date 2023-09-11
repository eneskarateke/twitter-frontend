import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TwitterLogo from "../logos/twitter-logo.svg";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  function handleRegistration() {
    const userData = { email, password };

    axios
      .post("http://localhost:8080/profile/register", userData)
      .then((response) => {
        console.log("Registration successful:", response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Registration error:", error);
        alert("registration failed");
      });
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: 750,
          height: 800,
          left: 0,
          top: 0,
          position: "relative",
          background: "white",
        }}
      >
        <img
          style={{
            width: 40,
            height: 33,
            left: 355,
            top: 30,
            position: "absolute",
          }}
          src={TwitterLogo}
          alt="Twitter Logo"
        />
        <div
          style={{
            left: 40,
            top: 106,
            position: "absolute",
            color: "black",
            fontSize: 30,
            fontFamily: "Segoe UI",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Create an account
        </div>
        <div
          style={{
            width: 670,
            height: 70,
            left: 40,
            top: 181,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 670,
              height: 70,
              left: 0,
              top: 0,
              position: "absolute",
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
            width: 670,
            height: 70,
            left: 40,
            top: 276,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 670,
              height: 70,
              left: 0,
              top: 0,
              position: "absolute",
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
            width: 670,
            height: 60,
            left: 40,
            top: 400,
            position: "absolute",
            cursor: "pointer", // Add a pointer cursor to indicate it's clickable
          }}
          onClick={handleRegistration} // Trigger the click event on the surrounding div
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#1DA1F2",
              borderRadius: 76,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "Segoe UI",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
