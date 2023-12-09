// src/components/Feed/PostForm.tsx
import React, { useState } from 'react';
import postService from '../../services/postService';

const PostForm: React.FC = () => {
  const [content, setContent] = useState('');

  const handlePostSubmit = async () => {
    try {
      await postService.createPost({ content });
      // Handle successful post creation (e.g., refresh the feed)
      console.log('Post created successfully');
    } catch (error) {
      // Handle post creation error
      console.error('Post creation failed', error);
    }
  };

  return (
    <div>
      <h3>Create a Post</h3>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={handlePostSubmit}>Post</button>
    </div>
  );
};

export default PostForm;
