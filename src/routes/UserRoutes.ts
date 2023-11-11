// user.routes.ts

import { Router } from 'express';
import {
  login,
  signup
} from '../controllers/UserController';

const userRouter = Router();


userRouter.post('/auth/signup', signup);

userRouter.post('/auth/login', login);

export default userRouter;
