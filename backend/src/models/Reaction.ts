// src/models/reaction.ts
import { Document, Schema, model } from 'mongoose';

interface ReactionDocument extends Document {
  postId: string;
  userId: string;
  type: string; // e.g., 'like', 'laugh', 'love', 'angry', etc.
}

const reactionSchema = new Schema<ReactionDocument>({
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
});

const Reaction = model<ReactionDocument>('Reaction', reactionSchema);

export default Reaction;
