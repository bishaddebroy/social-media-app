// src/routes/authRoutes.ts
import express from 'express';
import authController from '../controllers/authController';

const router = express.Router();

// Route for user signup
router.post('/signup', authController.signup);

// Route for user login
router.post('/login', authController.login);

// Route for requesting a password reset
router.post('/reset-password', authController.resetPassword);

export default router;
