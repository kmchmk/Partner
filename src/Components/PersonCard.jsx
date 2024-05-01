import React from 'react';
import './PersonCard.css'; 
import UserPhoto from './UserPhoto';

export default function PersonCard({ person }) {
  return (
    <div className="person-card">
      <img src={person.image} alt={person.name} className="person-image" />
      <UserPhoto/>
      <div className="person-info">
        <h3>{person.name}</h3>
        <p>{person.location}</p>
        <p>{person.age} years</p>
        <p>{person.ethnicity}</p>
        <p>{person.caste}</p>
        <p>{person.religion}</p>
        <p>{person.profession}</p>
        <button className="details-button">More Details</button>
      </div>
    </div>
  );
}
