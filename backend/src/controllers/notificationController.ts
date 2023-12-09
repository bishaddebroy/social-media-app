// src/controllers/notificationController.ts
import { Request, Response } from 'express';
import notificationService from '../services/notificationService';

const notificationController = {
  getNotifications: async (req: Request, res: Response) => {
    try {
      // Fetch all notifications from the database
      const notifications = await notificationService.getNotifications();

      // Send the notifications in the response
      return res.status(200).json(notifications);
    } catch (error) {
      console.error('Get notifications error', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  markAsRead: async (req: Request, res: Response) => {
    try {
      const notificationId = req.params.notificationId;

      // Mark a notification as read in the database
      await notificationService.markAsRead(notificationId);

      // Send a success response
      return res.status(200).json({ message: 'Notification marked as read successfully' });
    } catch (error) {
      console.error('Mark as read error', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Add other notification-related functions as needed
};

export default notificationController;
