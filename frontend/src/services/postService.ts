// src/services/postService.ts
const API_BASE_URL = 'http://localhost:3000/posts'; // Replace with your backend URL

const postService = {
  getPosts: async (): Promise<{ id: string; content: string }[]> => {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data;
  },

  createPost: async (postData: { content: string }): Promise<void> => {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include authentication headers if needed
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  },
};

export default postService;
