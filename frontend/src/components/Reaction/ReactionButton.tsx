// src/components/ReactionButton.tsx
import React, { useState } from 'react';
import axios from 'axios';

const ReactionButton = ({ postId, currentReaction, onReactionChange }) => {
  const [selectedReaction, setSelectedReaction] = useState(currentReaction);

  const handleReaction = async (type) => {
    try {
      const response = await axios.post('/api/reactions', { postId, type });
      setSelectedReaction(type);
      onReactionChange(type);
    } catch (error) {
      console.error('Reaction error', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleReaction('like')} disabled={selectedReaction === 'like'}>
        Like
      </button>
      <button onClick={() => handleReaction('laugh')} disabled={selectedReaction === 'laugh'}>
        Laugh
      </button>
      {/* Add buttons for other reaction types */}
    </div>
  );
};

export default ReactionButton;
