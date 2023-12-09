// src/services/notificationService.ts
const API_BASE_URL = 'http://localhost:3000/notifications'; // Replace with your backend URL

const notificationService = {
  getNotifications: async (): Promise<{ id: string; content: string; read: boolean }[]> => {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data;
  },

  markAsRead: async (notificationId: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/${notificationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Include authentication headers if needed
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  },
};

export default notificationService;
