// src/components/Reply.tsx
import React from 'react';
import ReactionButton from './ReactionButton';
import EditDeleteButton from '../EditDeleteButton';

const Reply = ({ reply }) => {
  return (
    <div>
      <p>{reply.content}</p>
      <ReactionButton postId={reply.postId} currentReaction={reply.reaction} />
      <EditDeleteButton type="replies" itemId={reply._id} onEdit={handleEdit} onDelete={handleDelete} />

    </div>
  );
};
