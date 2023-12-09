// src/components/EditDeleteButton.tsx
import React from 'react';
import axios from 'axios';

const EditDeleteButton = ({ type, itemId, onEdit, onDelete }) => {
  const handleEdit = () => {
    // Implement logic to open an edit form/modal
    onEdit();
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`/api/${type}/${itemId}`);
        onDelete();
      } catch (error) {
        console.error('Delete error', error);
      }
    }
  };

  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EditDeleteButton;
