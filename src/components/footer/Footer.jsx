import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className="wrapper">
          <a
            href="https://x.com/PratapVans41404"
            className="icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/vansh-pratap-singh-55981225b/"
            className="icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/VanshSengar"
            className="icon github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div style={{ color: "white", marginLeft: "10px", padding: "10px" }}>
          Created By Vansh Pratap Singh | © 2024. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export { Footer };
