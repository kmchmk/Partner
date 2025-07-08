import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifyingWhatsApp, setIsVerifyingWhatsApp] = useState(false);
  const [whatsappCodeSent, setWhatsappCodeSent] = useState(false);

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile/edit');
    }
  }, [isAuthenticated, navigate]);

  const handleGoogleSignUp = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup'
      }
    });
  };

  const handleWhatsAppSignUp = async () => {
    if (!whatsappNumber.trim()) {
      alert('Please enter your WhatsApp number');
      return;
    }

    // Basic phone number validation
    const phoneRegex = /^\+?[\d\s-()]+$/;
    if (!phoneRegex.test(whatsappNumber)) {
      alert('Please enter a valid phone number');
      return;
    }

    setIsVerifyingWhatsApp(true);

    try {
      // TODO: Implement WhatsApp verification
      // This would typically:
      // 1. Send a verification code via WhatsApp API
      // 2. Create a temporary user record
      // 3. Wait for code verification
      
      console.log('Sending WhatsApp verification to:', whatsappNumber);
      
      // Simulate sending code
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setWhatsappCodeSent(true);
      alert('Verification code sent to your WhatsApp! Please check your messages.');
      
    } catch (error) {
      console.error('WhatsApp verification error:', error);
      alert('Error sending verification code. Please try again.');
    } finally {
      setIsVerifyingWhatsApp(false);
    }
  };

  const handleVerifyWhatsAppCode = async () => {
    if (!verificationCode.trim()) {
      alert('Please enter the verification code');
      return;
    }

    try {
      // TODO: Verify WhatsApp code and create user account
      console.log('Verifying code:', verificationCode, 'for number:', whatsappNumber);
      
      // Simulate verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just redirect to profile creation
      // In real implementation, this would create the user account and authenticate them
      alert('WhatsApp verified successfully! Please complete your profile.');
      navigate('/profile/edit');
      
    } catch (error) {
      console.error('Code verification error:', error);
      alert('Invalid verification code. Please try again.');
    }
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setWhatsappCodeSent(false);
    setVerificationCode('');
    setWhatsappNumber('');
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1>Join Partner</h1>
        <p>Find your perfect match - Create your account to get started</p>
      </div>

      <div className="signup-card">
        <div className="auth-methods">
          <h3>Choose Sign-Up Method</h3>
          
          <div className="method-selection">
            <div 
              className={`method-option ${selectedMethod === 'google' ? 'selected' : ''}`}
              onClick={() => handleMethodSelect('google')}
            >
              <div className="method-icon google-icon">🔍</div>
              <div className="method-info">
                <h4>Sign up with Google</h4>
                <p>Quick and easy - your profile will be pre-filled</p>
              </div>
            </div>

            <div 
              className={`method-option ${selectedMethod === 'whatsapp' ? 'selected' : ''}`}
              onClick={() => handleMethodSelect('whatsapp')}
            >
              <div className="method-icon whatsapp-icon">💬</div>
              <div className="method-info">
                <h4>Sign up with WhatsApp</h4>
                <p>Verify with your phone number (Recommended)</p>
              </div>
            </div>
          </div>
        </div>

        {selectedMethod === 'google' && (
          <div className="google-signup-section">
            <div className="signup-info">
              <h4>Google Sign-Up Benefits:</h4>
              <ul>
                <li>✅ Instant profile creation</li>
                <li>✅ Name and email automatically filled</li>
                <li>✅ Profile picture from Google account</li>
                <li>✅ Just add personal details and you're ready!</li>
              </ul>
            </div>
            
            <button 
              className="google-signup-button"
              onClick={handleGoogleSignUp}
            >
              <span className="google-icon">🔍</span>
              Continue with Google
            </button>
          </div>
        )}

        {selectedMethod === 'whatsapp' && (
          <div className="whatsapp-signup-section">
            <div className="signup-info">
              <h4>WhatsApp Sign-Up Benefits:</h4>
              <ul>
                <li>✅ More secure verification</li>
                <li>✅ Direct contact option for matches</li>
                <li>✅ Better privacy control</li>
                <li>✅ Complete profile customization</li>
              </ul>
            </div>

            {!whatsappCodeSent ? (
              <div className="whatsapp-phone-input">
                <label htmlFor="whatsappNumber">WhatsApp Number</label>
                <div className="phone-input-group">
                  <input
                    type="tel"
                    id="whatsappNumber"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="+94 77 123 4567"
                    className="phone-input"
                  />
                  <button 
                    className="send-code-button"
                    onClick={handleWhatsAppSignUp}
                    disabled={isVerifyingWhatsApp}
                  >
                    {isVerifyingWhatsApp ? 'Sending...' : 'Send Code'}
                  </button>
                </div>
                <small>We'll send a verification code to this WhatsApp number</small>
              </div>
            ) : (
              <div className="whatsapp-verification">
                <p className="verification-message">
                  📱 Verification code sent to {whatsappNumber}
                </p>
                <div className="code-input-group">
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Enter 6-digit code"
                    className="code-input"
                    maxLength="6"
                  />
                  <button 
                    className="verify-button"
                    onClick={handleVerifyWhatsAppCode}
                  >
                    Verify & Continue
                  </button>
                </div>
                <button 
                  className="resend-button"
                  onClick={handleWhatsAppSignUp}
                  disabled={isVerifyingWhatsApp}
                >
                  Resend Code
                </button>
              </div>
            )}
          </div>
        )}

        <div className="signup-footer">
          <p>
            Already have an account? 
            <button 
              className="login-link"
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
          </p>
          <p className="terms-text">
            By signing up, you agree to our 
            <a href="/terms" target="_blank"> Terms of Service</a> and 
            <a href="/privacy" target="_blank"> Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;