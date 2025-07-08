import React from "react";
import PersonCard from "./PersonCard";

import { useSubscription } from "@apollo/client";
import GET_PERSON from "../subscriptions/person";
import GET_USER_PROFILES from "../subscriptions/userProfiles";

export default function MainContent() {
  const { loading: loadingPersons, error: errorPersons, data: dataPersons } = useSubscription(GET_PERSON);
  const { loading: loadingProfiles, error: errorProfiles, data: dataProfiles } = useSubscription(GET_USER_PROFILES);

  // Show loading if either subscription is loading
  if (loadingPersons || loadingProfiles) return <p>Loading...</p>;
  
  // Show error if either subscription has an error
  if (errorPersons) return <p>Error loading persons: {errorPersons.message}</p>;
  if (errorProfiles) console.log("User profiles not available:", errorProfiles.message);

  // Combine existing persons with new user profiles
  const existingPersons = dataPersons?.person || [];
  const userProfiles = dataProfiles?.user_profiles || [];

  // Convert user profiles to person format for consistent display
  const convertedUserProfiles = userProfiles.map(profile => ({
    id: `user_${profile.id}`,
    name: profile.name,
    age: profile.age,
    caste: profile.caste,
    ethnicity: profile.ethnicity,
    image: profile.profile_picture,
    location: profile.location,
    profession: profile.profession,
    religion: profile.religion,
    bio: profile.bio,
    isVerified: profile.is_verified,
    isUserProfile: true
  }));

  // Combine and sort by creation date (newest first)
  const allProfiles = [...existingPersons, ...convertedUserProfiles];

  return (
    <div>
      <div className="profiles-header">
        <h2>Find Your Perfect Match</h2>
        <p>Discover amazing people in your area</p>
      </div>
      
      {allProfiles.length === 0 ? (
        <div className="no-profiles">
          <p>No profiles available at the moment. Be the first to create your profile!</p>
        </div>
      ) : (
        <div className="profiles-grid">
          {allProfiles.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      )}
    </div>
  );
}
