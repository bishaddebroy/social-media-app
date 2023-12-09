// src/components/Auth/Signup.tsx
import React, { useState } from 'react';
import authService from '../../services/authService';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await authService.signup(email, password);
      // Handle successful signup (e.g., store token in local storage, redirect)
      console.log('Signup successful', response);
    } catch (error) {
      // Handle signup error
      console.error('Signup failed', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
