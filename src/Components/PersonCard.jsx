import React from 'react';
import './PersonCard.css'; 

export default function PersonCard({ person }) {
  // Use default image if no image is provided
  const displayImage = person.image || '/default-avatar.png';
  
  return (
    <div className="person-card">
      <div className="person-image-container">
        <img src={displayImage} alt={person.name} className="person-image" />
        {person.isUserProfile && person.isVerified && (
          <div className="verification-badge">
            <span>✅</span>
          </div>
        )}
        {person.isUserProfile && !person.isVerified && (
          <div className="verification-badge unverified">
            <span>⏳</span>
          </div>
        )}
      </div>
      
      <div className="person-info">
        <h3>{person.name}</h3>
        {person.location && <p className="location">📍 {person.location}</p>}
        {person.age && <p className="age">{person.age} years old</p>}
        
        <div className="person-details">
          {person.ethnicity && <span className="detail-tag">{person.ethnicity}</span>}
          {person.religion && <span className="detail-tag">{person.religion}</span>}
          {person.profession && <span className="detail-tag">{person.profession}</span>}
        </div>
        
        {person.bio && (
          <p className="bio-preview">
            {person.bio.length > 100 ? `${person.bio.substring(0, 100)}...` : person.bio}
          </p>
        )}
        
        <button className="details-button">
          {person.isUserProfile ? 'View Profile' : 'More Details'}
        </button>
      </div>
    </div>
  );
}
