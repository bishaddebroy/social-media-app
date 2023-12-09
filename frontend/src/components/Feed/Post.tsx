// src/components/Feed/Post.tsx
import React, { useState } from 'react';
import ReactionButton from '../Reaction/ReactionButton';
import EditDeleteButton from '../EditDeleteButton';


interface PostProps {
  _id: string;
  content: string;
  // Include other necessary properties for a post
}

const Post: React.FC<PostProps> = ({ _id ,content }) => {
  
  const [currentReaction, setCurrentReaction] = useState(post.reaction); // Assuming post.reaction contains the current reaction

  const handleReactionChange = (newReaction) => {
    setCurrentReaction(newReaction);
    // You can also update the backend to fetch the updated reaction count and update the post object
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    // Implement logic to open an edit form/modal for posts
  };

  const handleDelete = () => {
    // Implement logic to update the UI after deleting a post
  };
  
  
  
  return (
    <div>
      <p>{content}</p>
      <ReactionButton postId={_id} currentReaction={currentReaction} onReactionChange={handleReactionChange} />
      <EditDeleteButton type="posts" itemId={post._id} onEdit={handleEdit} onDelete={handleDelete} />

      {/* Include other components for displaying images, reactions, etc. */}
    </div>
  );
};

export default Post;
