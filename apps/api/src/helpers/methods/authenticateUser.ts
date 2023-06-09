import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers['authorization'];
  console.log({ tokenServer: token, sec: process.env.JWT_SECRET });
  let jwtPayload;

  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, process.env.JWT_SECRET);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { userId, email } = jwtPayload;
  const newToken = jwt.sign({ userId, email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  console.log({ newToken });
  res.setHeader('token', newToken);

  //Call the next middleware or controller
  next();
};

export const signJwt = (...info) => {
  return jwt.sign({ ...info }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};
