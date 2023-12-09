// src/controllers/commentController.ts
import { Request, Response } from 'express';
import commentService from '../services/commentService';

const commentController = {
  getComments: async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;

      // Fetch comments for a specific post from the database
      const comments = await commentService.getComments(postId);

      // Send the comments in the response
      return res.status(200).json(comments);
    } catch (error) {
      console.error('Get comments error', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  createComment: async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;
      const { content } = req.body;

      // Validate inputs (you may want to use a validation library)

      // Create a new comment for a specific post
      await commentService.createComment(postId, { content });

      // Send a success response
      return res.status(201).json({ message: 'Comment created successfully' });
    } catch (error) {
      console.error('Create comment error', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  createReply: async (req: Request, res: Response) => {
    try {
      const { commentId } = req.params;
      const { content } = req.body;
      const userId = req.user._id; // Assuming you have user information in the request

      const parentComment = await Comment.findById(commentId);

      if (!parentComment) {
        return res.status(404).json({ message: 'Parent comment not found' });
      }

      const reply = await Comment.create({ postId: parentComment.postId, userId, content });

      // Add the reply to the parent comment
      parentComment.replies.push(reply._id);
      await parentComment.save();

      res.status(201).json({ message: 'Reply created successfully', reply });
    } catch (error) {
      console.error('Create reply error', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  editComment: async (req: Request, res: Response) => {
    try {
      const { commentId } = req.params;
      const { content } = req.body;

      const comment = await Comment.findById(commentId);

      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }

      // Check if the user is the author of the comment
      if (comment.userId.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'You do not have permission to edit this comment' });
      }

      comment.content = content;
      await comment.save();

      res.status(200).json({ message: 'Comment edited successfully', comment });
    } catch (error) {
      console.error('Edit comment error', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  deleteComment: async (req: Request, res: Response) => {
    try {
      const { commentId } = req.params;

      const comment = await Comment.findById(commentId);

      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }

      // Check if the user is the author of the comment
      if (comment.userId.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'You do not have permission to delete this comment' });
      }

      await comment.remove();

      res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
      console.error('Delete comment error', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  editReply: async (req: Request, res: Response) => {
    try {
      const { commentId, replyId } = req.params;
      const { content } = req.body;

      const comment = await Comment.findById(commentId);

      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }

      // Check if the user is the author of the comment
      if (comment.userId.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'You do not have permission to edit this reply' });
      }

      const replyIndex = comment.replies.findIndex((reply) => reply._id.toString() === replyId);

      if (replyIndex === -1) {
        return res.status(404).json({ message: 'Reply not found' });
      }

      comment.replies[replyIndex].content = content;

      await comment.save();

      res.status(200).json({ message: 'Reply edited successfully', reply: comment.replies[replyIndex] });
    } catch (error) {
      console.error('Edit reply error', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  deleteReply: async (req: Request, res: Response) => {
    try {
      const { commentId, replyId } = req.params;

      const comment = await Comment.findById(commentId);

      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }

      // Check if the user is the author of the comment
      if (comment.userId.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'You do not have permission to delete this reply' });
      }

      const replyIndex = comment.replies.findIndex((reply) => reply._id.toString() === replyId);

      if (replyIndex === -1) {
        return res.status(404).json({ message: 'Reply not found' });
      }

      comment.replies.splice(replyIndex, 1);

      await comment.save();

      res.status(200).json({ message: 'Reply deleted successfully' });
    } catch (error) {
      console.error('Delete reply error', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },


  // Add other comment-related functions (edit, delete, reactions, etc.) as needed
};



export default commentController;
