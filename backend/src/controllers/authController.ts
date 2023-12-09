// src/controllers/authController.ts
import { Request, Response } from 'express';
import authService from '../services/authService';

const authController = {
  signup: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      
      // Validate inputs (you may want to use a validation library)

      // Check if the user already exists in the database
      const existingUser = await authService.findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      // Create a new user
      const user = await authService.createUser({ email, password });

      // Generate a token (you may want to use a more secure method)
      const token = authService.generateToken(user.id);

      // Send the token in the response
      return res.status(201).json({ token });
    } catch (error) {
      console.error('Signup error', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Validate inputs (you may want to use a validation library)

      // Check if the user exists in the database
      const user = await authService.findUserByEmail(email);
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Check if the password is correct
      const isPasswordValid = await authService.validatePassword(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Generate a token (you may want to use a more secure method)
      const token = authService.generateToken(user.id);

      // Send the token in the response
      return res.status(200).json({ token });
    } catch (error) {
      console.error('Login error', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  resetPassword: async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      // Validate inputs (you may want to use a validation library)

      // Check if the user exists in the database
      const user = await authService.findUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Generate a password reset token and send a reset email (you may want to use a library for this)
      const resetToken = authService.generateResetToken(user.id);
      await authService.sendPasswordResetEmail(user.email, resetToken);

      // Send a success response
      return res.status(200).json({ message: 'Password reset email sent successfully' });
    } catch (error) {
      console.error('Reset password error', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

export default authController;
