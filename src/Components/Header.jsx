import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login/Login";

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="header">
      <div className="logo">
        <h1 onClick={() => navigate("/")} style={{cursor: 'pointer'}}>Partner</h1>
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          {isAuthenticated && (
            <li>
              <button 
                onClick={handleProfileClick}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: 'inherit'
                }}
              >
                My Profile
              </button>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <button 
                onClick={handleSignUpClick}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: 'inherit'
                }}
              >
                Sign Up
              </button>
            </li>
          )}
        </ul>
      </nav>
      <Login />
    </header>
  );
}
