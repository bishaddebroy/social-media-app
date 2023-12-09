// src/app.ts
import express, { Application, Request, Response } from 'express';
import connectDB from './config/dbConfig';
import authMiddleware from './middleware/authMiddleware';
import postRoutes from './routes/postRoutes';
import commentRoutes from './routes/commentRoutes';
import notificationRoutes from './routes/notificationRoutes';

const app: Application = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Example usage of authentication middleware for protected routes
app.use('/api/protected', authMiddleware.verifyToken);

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/notifications', notificationRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
