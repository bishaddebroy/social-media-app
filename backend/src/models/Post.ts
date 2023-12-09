// src/models/post.ts
import { Document, Schema, model } from 'mongoose';

// Define the Post interface representing a document in the Posts collection
interface PostDocument extends Document {
  content: string;
  // Add other post properties as needed
}

// Define the Post schema
const postSchema = new Schema<PostDocument>({
  content: {
    type: String,
    required: true,
  },
  // Add other post schema fields as needed
});

// Create and export the Post model
const Post = model<PostDocument>('Post', postSchema);

export default Post;
