import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>Connect with us</h5>
          <a href="https://www.facebook.com"><img src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/03_facebook-512.png" alt="Facebook" /></a>
          <a href="https://www.instagram.com"><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-512.png" alt="Instagram" /></a>
        </div>
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
