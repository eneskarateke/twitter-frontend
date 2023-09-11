import React from "react";
import TwitterLogo from "../logos/twitter-logo.svg"; // Replace with the actual path to your SVG file

export default function Login() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 60,
        paddingBottom: 544,
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
            Phone number, email address
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
        >
          Sign up to Twitter
        </div>
      </div>
    </div>
  );
}
