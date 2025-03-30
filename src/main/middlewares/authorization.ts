import { UnauthorizedError } from '@/domain/entities/errors';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedError('Token não fornecido');
  }

  const [, token] = authHeader.split(' ');

  try {
    jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as TokenPayload;
    return next();
  } catch (err) {
    throw new UnauthorizedError('Token inválido');
  }
};