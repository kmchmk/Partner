import React from 'react'
import Header from './Components/Header'
import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <Header/>
      <div className="about-content">
        <div className="about-hero">
          <h1>About Partner</h1>
          <p className="hero-subtitle">Connecting Hearts, Building Relationships</p>
        </div>
        
        <div className="about-sections">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              Partner is dedicated to helping individuals find meaningful connections and lasting relationships. 
              We believe that everyone deserves to find their perfect match, and our platform is designed to 
              make that journey as seamless and enjoyable as possible.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Do</h2>
            <p>
              Our advanced matching system connects you with compatible individuals based on your preferences, 
              interests, and values. Whether you're looking for friendship, romance, or a life partner, 
              Partner provides a safe and welcoming environment to meet like-minded people.
            </p>
          </section>

          <section className="about-section">
            <h2>How It Works</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Create Your Profile</h3>
                <p>Build a comprehensive profile that showcases your personality, interests, and what you're looking for in a partner.</p>
              </div>
              <div className="feature-item">
                <h3>Smart Matching</h3>
                <p>Our intelligent algorithm analyzes compatibility factors to suggest profiles that align with your preferences.</p>
              </div>
              <div className="feature-item">
                <h3>Connect & Chat</h3>
                <p>Start conversations with your matches and build meaningful connections in a safe, moderated environment.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Why Choose Partner?</h2>
            <ul className="benefits-list">
              <li>✓ Verified profiles for authentic connections</li>
              <li>✓ Advanced privacy and security features</li>
              <li>✓ Diverse community from around the world</li>
              <li>✓ User-friendly interface and experience</li>
              <li>✓ Dedicated customer support team</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Join Our Community</h2>
            <p>
              Ready to start your journey? Join thousands of users who have already found their perfect match 
              through Partner. Create your profile today and discover the possibilities that await you.
            </p>
            <div className="cta-section">
              <a href="/signup" className="cta-button">Get Started Today</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
