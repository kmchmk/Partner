import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    age: '',
    location: '',
    profession: '',
    religion: '',
    caste: '',
    ethnicity: '',
    bio: '',
    profilePicture: '',
    isVerified: false,
    verificationDocuments: []
  });

  useEffect(() => {
    const loadUserProfile = async () => {
      // TODO: Implement GraphQL query to load user profile
      // This will connect to the Hasura backend to get additional profile data
      try {
        // Placeholder for now - in real implementation, this would query the database
        console.log('Loading user profile for:', user?.sub);
      } catch (error) {
        console.error('Error loading user profile:', error);
      }
    };

    if (isAuthenticated && user) {
      // Initialize profile with Auth0 data
      setProfileData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
        profilePicture: user.picture || ''
      }));
      
      // TODO: Load additional profile data from database
      loadUserProfile();
    }
  }, [isAuthenticated, user]);

  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  const handleVerifyProfile = () => {
    navigate('/profile/verify');
  };

  if (isLoading) {
    return <div className="loading">Loading your profile...</div>;
  }

  if (!isAuthenticated) {
    return <div className="not-authenticated">Please log in to view your profile.</div>;
  }

  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <div className="profile-picture-section">
          <img 
            src={profileData.profilePicture || '/default-avatar.png'} 
            alt={profileData.name}
            className="profile-picture"
          />
          {!profileData.isVerified && (
            <div className="verification-badge unverified">
              <span>⚠️ Unverified</span>
            </div>
          )}
          {profileData.isVerified && (
            <div className="verification-badge verified">
              <span>✅ Verified</span>
            </div>
          )}
        </div>
        
        <div className="profile-info">
          <h1>{profileData.name}</h1>
          <p className="email">{profileData.email}</p>
          {profileData.age && <p>Age: {profileData.age}</p>}
          {profileData.location && <p>📍 {profileData.location}</p>}
          {profileData.profession && <p>💼 {profileData.profession}</p>}
        </div>
      </div>

      <div className="profile-details">
        <div className="detail-section">
          <h3>Personal Information</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Religion:</label>
              <span>{profileData.religion || 'Not specified'}</span>
            </div>
            <div className="detail-item">
              <label>Caste:</label>
              <span>{profileData.caste || 'Not specified'}</span>
            </div>
            <div className="detail-item">
              <label>Ethnicity:</label>
              <span>{profileData.ethnicity || 'Not specified'}</span>
            </div>
          </div>
        </div>

        {profileData.bio && (
          <div className="detail-section">
            <h3>Bio</h3>
            <p className="bio">{profileData.bio}</p>
          </div>
        )}

        <div className="profile-actions">
          <button className="edit-button" onClick={handleEditProfile}>
            Edit Profile
          </button>
          {!profileData.isVerified && (
            <button className="verify-button" onClick={handleVerifyProfile}>
              Verify Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;