import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="text">
        Made by{" "}
        <a href="https://pranavshilavane.netlify.app" rel="noopener noreferrer" target="_blank">
          Pranav
        </a>{" "}
        with ReactJS and CSS
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/pranavshilavane" rel="noopener noreferrer" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://www.github.com/pranavshilavane" rel="noopener noreferrer" target="_blank">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}
