import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Partner Finder</h1>  
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>
      <div className="login-section">
        <button>Create / Login</button>
      </div>
    </header>
  )
}
