// src/controllers/postController.ts
import { Request, Response } from 'express';
import postService from '../services/postService';

const postController = {
  getPosts: async (req: Request, res: Response) => {
    try {
      // Fetch all posts from the database
      const posts = await postService.getPosts();

      // Send the posts in the response
      return res.status(200).json(posts);
    } catch (error) {
      console.error('Get posts error', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  createPost: async (req: Request, res: Response) => {
    try {
      const { content } = req.body;

      // Validate inputs (you may want to use a validation library)

      // Create a new post
      await postService.createPost({ content });

      // Send a success response
      return res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
      console.error('Create post error', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  editPost: async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;
      const { content } = req.body;

      const post = await Post.findById(postId);

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      // Check if the user is the author of the post
      if (post.userId.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'You do not have permission to edit this post' });
      }

      post.content = content;
      await post.save();

      res.status(200).json({ message: 'Post edited successfully', post });
    } catch (error) {
      console.error('Edit post error', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  deletePost: async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;

      const post = await Post.findById(postId);

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      // Check if the user is the author of the post
      if (post.userId.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'You do not have permission to delete this post' });
      }

      await post.remove();

      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      console.error('Delete post error', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },


  // Add other post-related functions (edit, delete, reactions, etc.) as needed
};

export default postController;
