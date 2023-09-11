import React from "react";
import TwitterLogo from "../logos/twitter-logo.svg";

function Register() {
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
      />
      <img
        style={{
          width: 40,
          height: 33,
          left: 355,
          top: 30,
          position: "absolute",
        }}
        src={TwitterLogo}
        alt="PlaceHolder"
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
          Email
        </div>
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
          width: 670,
          height: 60,
          left: 40,
          top: 400,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 670,
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
            left: 311,
            top: 18,
            position: "absolute",
            color: "white",
            fontSize: 18,
            fontFamily: "Segoe UI",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Register
        </div>
      </div>
    </div>
  );
}

export default Register;
