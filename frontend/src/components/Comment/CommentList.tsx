// src/components/Comment/CommentList.tsx
import React, { useState, useEffect } from 'react';
import commentService from '../../services/commentService';

interface Comment {
  id: string;
  content: string;
  reactions: number;
  // Include other necessary properties for a comment
}

interface CommentListProps {
  postId: string; // Assuming you pass the postId to fetch comments for a specific post
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // Fetch comments for the specific post from the backend when the component mounts
    const fetchComments = async () => {
      try {
        const fetchedComments = await commentService.getComments(postId);
        setComments(fetchedComments);
      } catch (error) {
        console.error('Error fetching comments', error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <p>Reactions: {comment.reactions}</p>
          {/* Include other components for displaying reactions, replies, etc. */}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
