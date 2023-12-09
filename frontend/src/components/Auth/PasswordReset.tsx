// src/components/Auth/PasswordReset.tsx
import React, { useState } from 'react';
import authService from '../../services/authService';

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    try {
      await authService.resetPassword(email);
      // Handle successful password reset request
      console.log('Password reset email sent successfully');
    } catch (error) {
      // Handle password reset error
      console.error('Password reset failed', error);
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handlePasswordReset}>Reset Password</button>
    </div>
  );
};

export default PasswordReset;
