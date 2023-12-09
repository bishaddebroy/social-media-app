// src/components/Comment/CommentForm.tsx
import React, { useState } from 'react';
import commentService from '../../services/commentService';

interface CommentFormProps {
  postId: string; // Assuming you pass the postId to create a comment for a specific post
}

const CommentForm: React.FC<CommentFormProps> = ({ postId }) => {
  const [content, setContent] = useState('');

  const handleCommentSubmit = async () => {
    try {
      await commentService.createComment(postId, { content });
      // Handle successful comment creation (e.g., refresh the comments)
      console.log('Comment created successfully');
    } catch (error) {
      // Handle comment creation error
      console.error('Comment creation failed', error);
    }
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={handleCommentSubmit}>Comment</button>
    </div>
  );
};

export default CommentForm;
