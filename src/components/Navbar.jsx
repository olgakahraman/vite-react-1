import React from "react";
import reactLogo from "../assets/react.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <img src={reactLogo} className="logo-react" alt="React logo" />
        <h3>ReactFacts</h3>
      </div>
      <div>
        <p>React Course - Project 1</p>
      </div>
    </nav>
  );
}
