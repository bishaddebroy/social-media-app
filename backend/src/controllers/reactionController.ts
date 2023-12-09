// src/controllers/reactionController.ts
import { Request, Response } from 'express';
import Reaction from '../models/Reaction';

const reactionController = {
  createReaction: async (req: Request, res: Response) => {
    try {
      const { postId, type } = req.body;
      const userId = req.user._id; // Assuming you have user information in the request

      // Check if the user has already reacted to the post
      const existingReaction = await Reaction.findOne({ postId, userId });

      if (existingReaction) {
        // User has already reacted, update the existing reaction
        existingReaction.type = type;
        await existingReaction.save();
      } else {
        // User has not reacted, create a new reaction
        await Reaction.create({ postId, userId, type });
      }

      res.status(201).json({ message: 'Reaction updated successfully' });
    } catch (error) {
      console.error('Create reaction error', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Add other reaction controller functions as needed (e.g., delete reaction)
};

export default reactionController;
