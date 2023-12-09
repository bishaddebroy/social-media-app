// src/components/Comment.tsx
import React, { useState } from 'react';
import ReactionButton from './ReactionButton';
import EditDeleteButton from '../EditDeleteButton';

const Comment = ({ comment, onReply }) => {
  const [showReplies, setShowReplies] = useState(false);

  const handleReply = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div>
      <p>{comment.content}</p>
      <ReactionButton postId={comment.postId} currentReaction={comment.reaction} />
      <EditDeleteButton type="comments" itemId={comment._id} onEdit={handleEdit} onDelete={handleDelete} />

      <button onClick={handleReply}>Reply</button>
      {showReplies && (
        <div>
          {comment.replies.map((reply) => (
            <Reply key={reply._id} reply={reply} />
          ))}
          <ReplyForm parentId={comment._id} onReply={onReply} />
        </div>
      )}
    </div>
  );
};
