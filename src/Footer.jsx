import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="text">
        Made by{" "}
        <a href="https://github.com/pranavshilavane" target="_blank">
          Pranav
        </a>{" "}
        with ReactJS and CSS
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/pranavshilavane">
          <AiFillInstagram />
        </a>
        <a href="https://www.github.com/pranavshilavane">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}
