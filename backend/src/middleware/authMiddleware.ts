// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

const authMiddleware = {
  // Middleware to check for a valid token
  verifyToken: (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Token not provided' });
    }

    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
      }

      // Attach the decoded user information to the request object
      req.user = decoded;

      next();
    });
  },

  // Middleware to protect routes that require authentication
  protectRoute: (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized - User not authenticated' });
    }

    next();
  },
};

export default authMiddleware;
