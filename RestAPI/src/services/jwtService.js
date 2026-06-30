import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';

// Generate access token
export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE });
};

// Generate refresh token (optional)
export const generateRefreshToken = (payload) => {
  return jwt.sign(
    payload, 
    JWT_SECRET, 
    { expiresIn: '30d' }
  );
};

// Verify token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

// Decode token without verification
export const decodeToken = (token) => {
  return jwt.decode(token);
};