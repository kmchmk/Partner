import React from 'react'
import ProfileCard from './ProfileCard'

export default function ProfileList({ profiles }) {
  return (
    <section className="profile-list">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
      <p>Profile list </p>
    </section>
  )
}
