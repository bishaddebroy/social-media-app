// src/models/notification.ts
import { Document, Schema, model } from 'mongoose';

// Define the Notification interface representing a document in the Notifications collection
interface NotificationDocument extends Document {
  content: string;
  read: boolean;
  // Add other notification properties as needed
}

// Define the Notification schema
const notificationSchema = new Schema<NotificationDocument>({
  content: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
  // Add other notification schema fields as needed
});

// Create and export the Notification model
const Notification = model<NotificationDocument>('Notification', notificationSchema);

export default Notification;
