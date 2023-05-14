import { NextFunction, Request, Response } from 'express';
import { User } from '../helpers/database/schema/user.schema';
import passport from 'passport';
import jwt from 'jsonwebtoken';

// GET /api/user/:id
export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await User.find({ _id: userId });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};

export const signup = async (req: Request, res: Response) => {
  passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
      res.json({
        message: 'Signup successful',
        user: req.user,
      });
    };
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('An error occurred.');

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, 'JWT_SECRET');

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
