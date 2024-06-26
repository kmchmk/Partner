import React from "react";
import Login from "./Login/Login";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Partner</h1>
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
        </ul>
      </nav>
      <Login />
    </header>
  );
}
