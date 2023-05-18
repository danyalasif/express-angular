import { NextFunction, Request, Response } from 'express';
import { IUser, User } from '../helpers/database/schema/user.schema';
import { signJwt } from '../helpers/methods/authenticateUser';

// GET /api/user/:id
export const getUser = async (req: Request, res: Response) => {
  const userId = req.body.email;
  console.log({ userId });
  const user = await User.find({ email: userId });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!req.body.email || !req.body.password) {
    res.json({ success: false, msg: 'Please pass username and password.' });
  } else {
    try {
      const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        role: 'user',
      });

      const token = signJwt({ userId: user.id, email });
      res.json({ message: 'success', user: { userId: user.id, email }, token });
    } catch (e) {
      res.status(400).json({ message: 'failed', error: e });
    }
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  console.log({ email, password });
  if (!(email && password)) {
    res.status(400).send();
  }

  let user: IUser;
  try {
    user = await User.findOne({ email });
  } catch (error) {
    res.status(401).send();
  }

  if (!user.isValidPassword(password)) {
    res.status(401).send();
    return;
  }

  const token = signJwt({ userId: user.id, email });
  res.json({
    token,
    user: { userId: user.id, email: user.email, role: user.role },
  });
};
