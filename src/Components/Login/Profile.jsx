import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-container">
        <div className="image-container">
          <img src={user.picture} alt={user.name} />
        </div>
        <div className="text-container">
          <h5>{user.given_name}</h5>
          <p>{user.email}</p>
        </div>
        <LogoutButton />
      </div>
    )
  );
};

export default Profile;
