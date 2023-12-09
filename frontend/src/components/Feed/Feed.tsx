// src/components/Feed/Feed.tsx
import React, { useState, useEffect } from 'react';
import Post from './Post';
import postService from '../../services/postService';

// Assuming the structure of your Post objects
interface Post {
    id: string;
    content: string;
  }

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch posts from the backend when the component mounts
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await postService.getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Feed</h2>
      {posts.map((post) => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
};

export default Feed;
