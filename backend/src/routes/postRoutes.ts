// src/routes/postRoutes.ts
import express from 'express';
import postController from '../controllers/postController';

const router = express.Router();

// Route for getting all posts
router.get('/posts', postController.getPosts);

// Route for creating a new post
router.post('/posts', postController.createPost);

// Route for editing a post
router.put('/posts/:postId', postController.editPost);

// Route for deleting a post
router.delete('/posts/:postId', postController.deletePost);

// Add other post routes as needed (e.g., edit, delete)

export default router;
