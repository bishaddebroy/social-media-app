// src/components/Notification/NotificationList.tsx
import React, { useState, useEffect } from 'react';
import notificationService from '../../services/notificationService';

interface Notification {
  id: string;
  content: string;
  read: boolean;
}

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Fetch notifications from the backend when the component mounts
    const fetchNotifications = async () => {
      try {
        const fetchedNotifications = await notificationService.getNotifications();
        setNotifications(fetchedNotifications);
      } catch (error) {
        console.error('Error fetching notifications', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await notificationService.markAsRead(notificationId);
      // Handle successful marking as read (e.g., update the state)
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === notificationId ? { ...notification, read: true } : notification
        )
      );
      console.log('Notification marked as read successfully');
    } catch (error) {
      // Handle marking as read error
      console.error('Marking as read failed', error);
    }
  };

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <div key={notification.id} style={{ background: notification.read ? '#efefef' : '#fff' }}>
          <p>{notification.content}</p>
          {!notification.read && (
            <button onClick={() => handleMarkAsRead(notification.id)}>Mark as Read</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
