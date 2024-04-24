import React from 'react'

export default function ProfileCard({ name, location, age, ethnicity, occupation, civilStatus, educationLevel, height, differentlyAbled, smoking, drinking }) {
  return (
    <div className="profile-card">
      <h3>{name}Selection</h3>
      <p>{location} Country of Residence</p>
      <p>{age} Age</p>
      <p>{ethnicity}Ethnicity</p>
      <p>{occupation}Profession</p>
      <p>{civilStatus}Civil Status</p>
      <p>{educationLevel}Education Level</p>
      <p>{height}Height</p>
      <p>{differentlyAbled}Differently Abled</p>
      <p>{smoking}Smoking</p>
      <p>{drinking}Drinking</p>
      {/* More details... */}
    </div>
  )
}
