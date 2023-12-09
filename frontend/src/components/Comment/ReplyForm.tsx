
// src/components/ReplyForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

const ReplyForm = ({ parentId, onReply }) => {
  const [content, setContent] = useState('');

  const handleReply = async () => {
    try {
      const response = await axios.post('/api/comments/' + parentId + '/replies', { content });
      onReply(response.data.reply);
      setContent('');
    } catch (error) {
      console.error('Reply error', error);
    }
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleReply}>Submit Reply</button>
    </div>
  );
