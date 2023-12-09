// src/routes/notificationRoutes.ts
import express from 'express';
import notificationController from '../controllers/notificationController';

const router = express.Router();

// Route for getting all notifications
router.get('/notifications', notificationController.getNotifications);

// Route for marking a notification as read
router.put('/notifications/:notificationId/read', notificationController.markAsRead);

// Add other notification routes as needed

export default router;
