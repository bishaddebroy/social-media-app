// src/services/commentService.ts
const API_BASE_URL = 'http://localhost:3000/comments'; // Replace with your backend URL

const commentService = {
  getComments: async (postId: string): Promise<{ id: string; content: string; reactions: number }[]> => {
    const response = await fetch(`${API_BASE_URL}?postId=${postId}`);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data;
  },

  createComment: async (postId: string, commentData: { content: string }): Promise<void> => {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include authentication headers if needed
      },
      body: JSON.stringify({ ...commentData, postId }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  },
};

export default commentService;
