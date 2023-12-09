// src/routes/reactionRoutes.ts
import express from 'express';
import reactionController from '../controllers/reactionController';

const router = express.Router();

// Route for creating a new reaction
router.post('/reactions', reactionController.createReaction);

// Add other reaction routes as needed (e.g., delete reaction)

export default router;
