import React from "react";
import PersonCard from "./PersonCard";

import { useSubscription } from "@apollo/client";
import GET_PERSON from "../subscriptions/person";
import GET_USER_PROFILES from "../subscriptions/userProfiles";

export default function MainContent({ filters = {} }) {
  const { loading: loadingPersons, error: errorPersons, data: dataPersons } = useSubscription(GET_PERSON);
  const { loading: loadingProfiles, error: errorProfiles, data: dataProfiles } = useSubscription(GET_USER_PROFILES);

  // Show loading if either subscription is loading
  if (loadingPersons || loadingProfiles) return <div className="loading">Loading...</div>;
  
  // Show error if either subscription has an error
  if (errorPersons) return <div className="error">Error loading persons: {errorPersons.message}</div>;
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

  // Apply filters
  const filteredProfiles = allProfiles.filter(person => {
    // Gender filter
    if (filters.gender && person.gender && person.gender !== filters.gender) {
      return false;
    }

    // Age filter
    if (person.age) {
      if (person.age < filters.ageMin || person.age > filters.ageMax) {
        return false;
      }
    }

    // Countries filter
    if (filters.countries && filters.countries.length > 0 && person.location) {
      const personCountry = person.location.split(',').pop()?.trim();
      if (!filters.countries.some(country => 
        personCountry?.toLowerCase().includes(country.toLowerCase())
      )) {
        return false;
      }
    }

    // Religion filter
    if (filters.religions && filters.religions.length > 0 && person.religion) {
      if (!filters.religions.includes(person.religion)) {
        return false;
      }
    }

    // Add more filter logic as needed for other fields
    return true;
  });

  return (
    <div className="main-content">
      <div className="profiles-header">
        <h2>Find Your Perfect Match</h2>
        <p>Discover amazing people in your area</p>
        {filteredProfiles.length !== allProfiles.length && (
          <p className="filter-results">
            Showing {filteredProfiles.length} of {allProfiles.length} profiles
          </p>
        )}
      </div>
      
      {filteredProfiles.length === 0 ? (
        <div className="no-profiles">
          {allProfiles.length === 0 ? (
            <p>No profiles available at the moment. Be the first to create your profile!</p>
          ) : (
            <p>No profiles match your current filters. Try adjusting your search criteria.</p>
          )}
        </div>
      ) : (
        <div className="profiles-grid">
          {filteredProfiles.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      )}
    </div>
  );
}
