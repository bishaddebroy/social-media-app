// src/models/comment.ts
import { Document, Schema, model } from 'mongoose';

interface CommentDocument extends Document {
  postId: string;
  userId: string;
  content: string;
  reactions: Record<string, number>; // Reaction counters, e.g., { like: 2, laugh: 1 }
  replies: CommentDocument[];
}

const commentSchema = new Schema<CommentDocument>(
  {
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    reactions: { type: Map, of: Number, default: {} },
    replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

const Comment = model<CommentDocument>('Comment', commentSchema);

export default Comment;
