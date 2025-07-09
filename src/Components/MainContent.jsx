import React from "react";
import PersonCard from "./PersonCard";

import { useSubscription } from "@apollo/client";
import GET_PERSON from "../subscriptions/person";
import GET_USER_PROFILES from "../subscriptions/userProfiles";

export default function MainContent({ filters = {} }) {
  const { loading: loadingPersons, error: errorPersons, data: dataPersons } = useSubscription(GET_PERSON);
  const { loading: loadingProfiles, error: errorProfiles, data: dataProfiles } = useSubscription(GET_USER_PROFILES);

  // Mock data for demonstration when backend is unavailable
  const mockPersons = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      gender: "Female",
      caste: "Christian",
      ethnicity: "Caucasian",
      image: "/default-avatar.png",
      location: "New York, United States",
      profession: "Software Engineer",
      religion: "Christianity",
      civil_status: "Single",
      education_level: "Bachelor Degree",
      drinking: "Socially",
      smoking: "No",
      bio: "Love traveling, reading, and exploring new technologies. Looking for someone who shares similar interests and values."
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 32,
      gender: "Male",
      caste: "Buddhist",
      ethnicity: "Asian",
      image: "/default-avatar.png",
      location: "San Francisco, United States",
      profession: "Product Manager",
      religion: "Buddhism",
      civil_status: "Divorced",
      education_level: "Master Degree",
      drinking: "No",
      smoking: "No",
      bio: "Meditation enthusiast, yoga practitioner, and nature lover. Seeking meaningful connections and genuine conversations."
    },
    {
      id: 3,
      name: "Priya Sharma",
      age: 26,
      gender: "Female",
      caste: "Hindu",
      ethnicity: "South Asian",
      image: "/default-avatar.png",
      location: "Mumbai, India",
      profession: "Doctor",
      religion: "Hinduism",
      civil_status: "Single",
      education_level: "Doctorate",
      drinking: "No",
      smoking: "No",
      bio: "Dedicated healthcare professional with a passion for helping others. Love classical music, cooking, and spending time with family."
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      age: 30,
      gender: "Male",
      caste: "Muslim",
      ethnicity: "Middle Eastern",
      image: "/default-avatar.png",
      location: "Dubai, United Arab Emirates",
      profession: "Business Analyst",
      religion: "Islam",
      civil_status: "Single",
      education_level: "Bachelor Degree",
      drinking: "No",
      smoking: "Occasionally",
      bio: "Business professional with interests in finance and technology. Enjoy reading, traveling, and learning about different cultures."
    },
    {
      id: 5,
      name: "Emma Wilson",
      age: 25,
      gender: "Female",
      caste: "Catholic",
      ethnicity: "Caucasian",
      image: "/default-avatar.png",
      location: "London, United Kingdom",
      profession: "Teacher",
      religion: "Christianity",
      civil_status: "Single",
      education_level: "Bachelor Degree",
      drinking: "Yes",
      smoking: "No",
      bio: "Primary school teacher who loves working with children. Enjoy hiking, painting, and weekend adventures with friends."
    }
  ];

  // Show loading only briefly, then fall back to mock data if backend unavailable
  if ((loadingPersons || loadingProfiles) && !errorPersons && !errorProfiles) {
    return <div className="loading">Loading...</div>;
  }
  
  // If there are errors, use mock data but log the errors
  if (errorPersons) console.log("Error loading persons:", errorPersons.message);
  if (errorProfiles) console.log("User profiles not available:", errorProfiles.message);

  // Use real data if available, otherwise fall back to mock data
  const existingPersons = dataPersons?.person || mockPersons;
  const userProfiles = dataProfiles?.user_profiles || [];

  // Convert user profiles to person format for consistent display
  const convertedUserProfiles = userProfiles.map(profile => ({
    id: `user_${profile.id}`,
    name: profile.name,
    age: profile.age,
    gender: profile.gender,
    caste: profile.caste,
    ethnicity: profile.ethnicity,
    image: profile.profile_picture,
    location: profile.location,
    profession: profile.profession,
    religion: profile.religion,
    civil_status: profile.civil_status,
    education_level: profile.education_level,
    drinking: profile.drinking,
    smoking: profile.smoking,
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

    // Civil Status filter
    if (filters.civilStatus && filters.civilStatus.length > 0 && person.civil_status) {
      if (!filters.civilStatus.includes(person.civil_status)) {
        return false;
      }
    }

    // Education Level filter
    if (filters.educationLevel && filters.educationLevel.length > 0 && person.education_level) {
      if (!filters.educationLevel.includes(person.education_level)) {
        return false;
      }
    }

    // Drinking filter
    if (filters.drinking && filters.drinking.length > 0 && person.drinking) {
      if (!filters.drinking.includes(person.drinking)) {
        return false;
      }
    }

    // Smoking filter
    if (filters.smoking && filters.smoking.length > 0 && person.smoking) {
      if (!filters.smoking.includes(person.smoking)) {
        return false;
      }
    }

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
