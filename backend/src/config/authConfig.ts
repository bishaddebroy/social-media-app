// src/config/authConfig.ts
const authConfig = {
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    jwtExpiration: process.env.JWT_EXPIRATION || '1h',
  };
  
  export default authConfig;
  