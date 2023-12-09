// src/models/user.ts
import { Document, Schema, model } from 'mongoose';

// Define the User interface representing a document in the Users collection
interface UserDocument extends Document {
  email: string;
  password: string;
  // Add other user properties as needed
}

// Define the User schema
const userSchema = new Schema<UserDocument>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add other user schema fields as needed
});

// Create and export the User model
const User = model<UserDocument>('User', userSchema);

export default User;
