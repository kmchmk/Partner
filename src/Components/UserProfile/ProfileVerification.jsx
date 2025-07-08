import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import './ProfileVerification.css';

const ProfileVerification = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [verificationData, setVerificationData] = useState({
    verificationType: '',
    documentPhoto: null,
    selfiePhoto: null,
    additionalNotes: ''
  });
  const [previewImages, setPreviewImages] = useState({
    document: '',
    selfie: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVerificationTypeChange = (type) => {
    setVerificationData(prev => ({
      ...prev,
      verificationType: type
    }));
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      setVerificationData(prev => ({
        ...prev,
        [fileType]: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImages(prev => ({
          ...prev,
          [fileType === 'documentPhoto' ? 'document' : 'selfie']: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotesChange = (e) => {
    setVerificationData(prev => ({
      ...prev,
      additionalNotes: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!verificationData.verificationType) {
      alert('Please select a verification method');
      return;
    }

    if (verificationData.verificationType === 'document' && !verificationData.documentPhoto) {
      alert('Please upload your ID document');
      return;
    }

    if (verificationData.verificationType === 'selfie' && !verificationData.selfiePhoto) {
      alert('Please upload a selfie photo');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Submit verification data to backend
      // This should:
      // 1. Upload files to cloud storage
      // 2. Create verification request in database
      // 3. Send notification to admin for review
      
      console.log('Submitting verification request:', {
        userId: user.sub,
        verificationType: verificationData.verificationType,
        hasDocument: !!verificationData.documentPhoto,
        hasSelfie: !!verificationData.selfiePhoto,
        notes: verificationData.additionalNotes
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Verification request submitted successfully! Our team will review your documents within 24-48 hours.');
      navigate('/profile');
      
    } catch (error) {
      console.error('Error submitting verification:', error);
      alert('Error submitting verification request. Please try again.');
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
    return <div className="not-authenticated">Please log in to verify your profile.</div>;
  }

  return (
    <div className="verification-container">
      <div className="verification-header">
        <h1>Profile Verification</h1>
        <p>To ensure the safety and authenticity of our community, please verify your identity</p>
      </div>

      <div className="verification-info">
        <div className="info-card">
          <h3>🔐 Why Verification?</h3>
          <ul>
            <li>Ensures profile authenticity</li>
            <li>Builds trust in our community</li>
            <li>Prevents misuse of photos</li>
            <li>Creates a safer environment for everyone</li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="verification-form">
        <div className="verification-methods">
          <h3>Choose Verification Method</h3>
          <div className="method-options">
            <div 
              className={`method-card ${verificationData.verificationType === 'document' ? 'selected' : ''}`}
              onClick={() => handleVerificationTypeChange('document')}
            >
              <div className="method-icon">📄</div>
              <h4>ID Document</h4>
              <p>Upload your NIC or Passport bio page</p>
            </div>
            
            <div 
              className={`method-card ${verificationData.verificationType === 'selfie' ? 'selected' : ''}`}
              onClick={() => handleVerificationTypeChange('selfie')}
            >
              <div className="method-icon">🤳</div>
              <h4>Live Selfie</h4>
              <p>Take a clear selfie photo</p>
            </div>
          </div>
        </div>

        {verificationData.verificationType === 'document' && (
          <div className="upload-section">
            <h3>Upload ID Document</h3>
            <p className="upload-instructions">
              Please upload a clear photo of your National Identity Card (NIC) or Passport bio page. 
              Make sure all text is readable and the photo is well-lit.
            </p>
            
            <div className="file-upload-area">
              <label htmlFor="documentPhoto" className="upload-zone">
                {previewImages.document ? (
                  <img src={previewImages.document} alt="Document preview" className="preview-image" />
                ) : (
                  <div className="upload-placeholder">
                    <div className="upload-icon">📷</div>
                    <p>Click to upload ID document</p>
                  </div>
                )}
              </label>
              <input
                type="file"
                id="documentPhoto"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'documentPhoto')}
                className="file-input"
              />
            </div>
          </div>
        )}

        {verificationData.verificationType === 'selfie' && (
          <div className="upload-section">
            <h3>Upload Live Selfie</h3>
            <p className="upload-instructions">
              Please take a clear selfie photo. Look directly at the camera, ensure good lighting, 
              and make sure your face is clearly visible.
            </p>
            
            <div className="file-upload-area">
              <label htmlFor="selfiePhoto" className="upload-zone">
                {previewImages.selfie ? (
                  <img src={previewImages.selfie} alt="Selfie preview" className="preview-image" />
                ) : (
                  <div className="upload-placeholder">
                    <div className="upload-icon">🤳</div>
                    <p>Click to upload selfie</p>
                  </div>
                )}
              </label>
              <input
                type="file"
                id="selfiePhoto"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'selfiePhoto')}
                className="file-input"
              />
            </div>
          </div>
        )}

        {verificationData.verificationType && (
          <div className="notes-section">
            <h3>Additional Notes (Optional)</h3>
            <textarea
              value={verificationData.additionalNotes}
              onChange={handleNotesChange}
              placeholder="Any additional information you'd like to provide..."
              rows="3"
              maxLength="300"
            />
            <small>{verificationData.additionalNotes.length}/300 characters</small>
          </div>
        )}

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
            className="submit-button"
            disabled={isSubmitting || !verificationData.verificationType}
          >
            {isSubmitting ? 'Submitting...' : 'Submit for Verification'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileVerification;