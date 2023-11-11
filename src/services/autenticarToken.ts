import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export function autenticarToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  console.log(token)

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  jwt.verify(token, process.env.CHAVE_SECRETA as string, (err, user) => {
    if (err) {
      return res.status(403).json({ mensagem: 'Falha na autenticação do token' });
    }
    req.user = user as JwtPayload;
    next();
  });
}
