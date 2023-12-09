// src/routes/commentRoutes.ts
import express from 'express';
import commentController from '../controllers/commentController';

const router = express.Router();

// Route for getting all comments for a specific post
router.get('/posts/:postId/comments', commentController.getComments);

// Route for creating a new comment for a specific post
router.post('/posts/:postId/comments', commentController.createComment);

// Route for creating a new comment
router.post('/comments', commentController.createComment);

// Route for creating a reply to a comment
router.post('/comments/:commentId/replies', commentController.createReply);

// Route for editing a comment
router.put('/comments/:commentId', commentController.editComment);

// Route for deleting a comment
router.delete('/comments/:commentId', commentController.deleteComment);

// Route for editing a reply
router.put('/replies/:replyId', commentController.editReply);

// Route for deleting a reply
router.delete('/replies/:replyId', commentController.deleteReply);

// Add other comment routes as needed (e.g., edit, delete)

export default router;
