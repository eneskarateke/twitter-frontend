import React from "react";

import BackTwitter from "../logos/BackTwitter.svg"; // Replace with the actual path to your SVG file
import TwitterLogo from "../logos/twitter-logo.svg"; // Replace with the actual path to your SVG file
import GoogleLogo from "../logos/google-icon.svg"; // Replace with the actual path to your SVG file
import AppleLogo from "../logos/logo-apple.svg"; // Replace with the actual path to your SVG file

function SignUp() {
  const containerStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    background: "white",
  };

  const textStyle = {
    color: "black",
    fontFamily: "Roboto",
    wordWrap: "break-word",
  };

  const headerStyle = {
    ...textStyle,
    position: "absolute",
    fontWeight: "900",
  };

  const contentStyle = {
    ...textStyle,
    position: "absolute",
    fontWeight: "900",
    fontSize: "42px",
  };

  const linkStyle = {
    ...textStyle,
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          ...headerStyle,
          left: "1155px",
          top: "298px",
          fontSize: "84px",
        }}
      >
        Happening now
      </div>
      <div style={{ ...contentStyle, left: "1155px", top: "442px" }}>
        Join Twitter today
      </div>
      <div
        style={{
          width: "373px",
          left: "1164px",
          top: "759px",
          position: "absolute",
        }}
      >
        <span style={linkStyle}>By signing up you agree to the </span>
        <span style={{ ...linkStyle, color: "#1E97E1" }}>Terms of Service</span>
        <span style={linkStyle}> and </span>
        <span style={{ ...linkStyle, color: "#1E97E1" }}>Privacy Policy</span>
        <span style={linkStyle}>, including </span>
        <span style={{ ...linkStyle, color: "#1E97E1" }}>Cookie Use</span>
        <span style={linkStyle}>.</span>
      </div>
      <div style={{ ...linkStyle, left: "1164px", top: "819px" }}>
        Already have an account?{" "}
        <span style={{ color: "#1E97E1" }}>Log in</span>
      </div>
      <img
        style={{
          width: "1121px",
          height: "1028px",
          left: "-7px",
          top: "-3px",
          position: "absolute",
        }}
        src={BackTwitter}
        alt="back-twitter"
      />
      <img
        style={{
          width: "50px",
          height: "41px",
          left: "1158px",
          top: "200px",
          position: "absolute",
        }}
        src={TwitterLogo}
        alt="twitter logo"
      />
      <div
        style={{
          width: "403px",
          height: "62px",
          left: "1164px",
          top: "674px",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div style={{ width: "403px", height: "62px", position: "relative" }}>
          <div
            style={{
              width: "403px",
              height: "62px",
              left: "0",
              top: "0",
              position: "absolute",
              opacity: "0.76",
              background: "rgba(196, 196, 196, 0)",
              borderRadius: "42px",
              border: "0.50px #E4EAED solid",
            }}
          />
          <div
            style={{
              width: "250px",
              height: "23px",
              left: "80px",
              top: "20px",
              position: "absolute",
              ...textStyle,
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Sign up with phone or email
          </div>
        </div>
      </div>
      <div
        style={{
          width: "403px",
          height: "62px",
          left: "1164px",
          top: "598px",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div style={{ width: "403px", height: "62px", position: "relative" }}>
          <div
            style={{
              width: "403px",
              height: "62px",
              left: "0",
              top: "0",
              position: "absolute",
              opacity: "0.78",
              background: "rgba(196, 196, 196, 0)",
              borderRadius: "42px",
              border: "0.50px #E4EAED solid",
            }}
          />
          <img
            style={{
              width: "31px",
              height: "32px",
              left: "100px",
              top: "18px",
              position: "absolute",
            }}
            src={AppleLogo}
            alt="Apple logo"
          />
          <div
            style={{
              width: "197px",
              height: "25px",
              left: "137px",
              top: "22px",
              position: "absolute",
              ...textStyle,
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Sign up with Apple
          </div>
        </div>
      </div>
      <div
        style={{
          width: "1481px",
          height: "19px",
          left: "320px",
          top: "1043px",
          position: "absolute",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "13px",
            left: "0",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          About
        </div>
        <div
          style={{
            width: "70px",
            height: "13px",
            left: "59px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Help Center
        </div>
        <div
          style={{
            width: "101px",
            height: "13px",
            left: "148px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Terms of Service
        </div>
        <div
          style={{
            width: "82px",
            height: "13px",
            left: "268px",
            top: "0",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Privacy Policy
        </div>
        <div
          style={{
            width: "82px",
            height: "13px",
            left: "369px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Cookie Policy
        </div>
        <div
          style={{
            width: "49px",
            height: "11px",
            left: "470px",
            top: "0",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Ads info
        </div>
        <div
          style={{
            width: "29px",
            height: "11px",
            left: "538px",
            top: "2px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Blog
        </div>
        <div
          style={{
            width: "43px",
            height: "11px",
            left: "586px",
            top: "2px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Status
        </div>
        <div
          style={{
            width: "43px",
            height: "11px",
            left: "648px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Careers
        </div>
        <div
          style={{
            width: "103px",
            height: "17px",
            left: "710px",
            top: "2px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Brand Resources
        </div>
        <div
          style={{
            width: "66px",
            height: "17px",
            left: "832px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Advertising
        </div>
        <div
          style={{
            width: "66px",
            height: "17px",
            left: "917px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Marketing
        </div>
        <div
          style={{
            width: "116px",
            height: "14px",
            left: "1002px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Twitter for Business
        </div>
        <div
          style={{
            width: "65px",
            height: "12px",
            left: "1137px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Developers
        </div>
        <div
          style={{
            width: "55px",
            height: "10px",
            left: "1221px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Directory
        </div>
        <div
          style={{
            width: "55px",
            height: "10px",
            left: "1295px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          Settings
        </div>
        <div
          style={{
            width: "112px",
            height: "11px",
            left: "1369px",
            top: "1px",
            position: "absolute",
            ...textStyle,
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          © 2021 Twitter, Inc.
        </div>
      </div>
      <div
        style={{
          width: "403px",
          height: "62px",
          left: "1164px",
          top: "522px",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div style={{ width: "403px", height: "62px", position: "relative" }}>
          <div
            style={{
              width: "403px",
              height: "62px",
              left: "0",
              top: "0",
              position: "absolute",
              opacity: "0.80",
              background: "rgba(196, 196, 196, 0)",
              borderRadius: "42px",
              border: "0.50px #E4EAED solid",
            }}
          />
          <div
            style={{
              width: "197px",
              height: "25px",
              left: "131px",
              top: "21px",
              position: "absolute",
              ...textStyle,
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Sign up with Google
          </div>
          <img
            style={{
              width: "31px",
              height: "32px",
              left: "97px",
              top: "14px",
              position: "absolute",
            }}
            src={GoogleLogo}
            alt="Google logo"
          />
        </div>
      </div>
    </div>
  );
}
export default SignUp;
