import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import './UserProfileEdit.css';

const UserProfileEdit = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    profession: '',
    religion: '',
    caste: '',
    ethnicity: '',
    bio: '',
    profilePicture: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    if (isAuthenticated && user) {
      // Initialize form with existing data
      setFormData(prev => ({
        ...prev,
        name: user.name || ''
      }));
      setPreviewImage(user.picture || '');
      
      // TODO: Load existing profile data from database
      loadExistingProfile();
    }
  }, [isAuthenticated, user]);

  const loadExistingProfile = async () => {
    // TODO: Load existing profile data from GraphQL
    try {
      console.log('Loading existing profile data for editing');
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profilePicture: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Submit profile data to GraphQL backend
      console.log('Submitting profile data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate back to profile
      navigate('/profile');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div className="not-authenticated">Please log in to edit your profile.</div>;
  }

  return (
    <div className="profile-edit-container">
      <div className="edit-header">
        <h1>Edit Your Profile</h1>
        <p>Complete your profile to connect with potential partners</p>
      </div>

      <form onSubmit={handleSubmit} className="profile-edit-form">
        <div className="photo-section">
          <div className="photo-preview">
            <img 
              src={previewImage || '/default-avatar.png'} 
              alt="Profile preview"
              className="preview-image"
            />
          </div>
          <div className="photo-upload">
            <label htmlFor="profilePicture" className="upload-button">
              Change Photo
            </label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
            <small>Upload a clear photo of yourself (JPG, PNG)</small>
          </div>
        </div>

        <div className="form-sections">
          <div className="form-section">
            <h3>Basic Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="18"
                  max="100"
                  placeholder="Your age"
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  placeholder="City, Country"
                />
              </div>

              <div className="form-group">
                <label htmlFor="profession">Profession</label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  placeholder="Your profession"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Cultural Background</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="religion">Religion</label>
                <select
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                >
                  <option value="">Select Religion</option>
                  <option value="Buddhism">Buddhism</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Islam">Islam</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="caste">Caste</label>
                <input
                  type="text"
                  id="caste"
                  name="caste"
                  value={formData.caste}
                  onChange={handleInputChange}
                  placeholder="Optional"
                />
              </div>

              <div className="form-group">
                <label htmlFor="ethnicity">Ethnicity</label>
                <select
                  id="ethnicity"
                  name="ethnicity"
                  value={formData.ethnicity}
                  onChange={handleInputChange}
                >
                  <option value="">Select Ethnicity</option>
                  <option value="Sinhalese">Sinhalese</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Moor">Moor</option>
                  <option value="Burgher">Burgher</option>
                  <option value="Malay">Malay</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>About You</h3>
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us about yourself, your interests, and what you're looking for in a partner..."
                maxLength="500"
              />
              <small>{formData.bio.length}/500 characters</small>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            className="cancel-button"
            onClick={handleCancel}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="save-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileEdit;