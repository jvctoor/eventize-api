// user.routes.ts

import { Router } from 'express';
import {
  getAllEventos,
  getEventoById
} from '../controllers/EventController';

const eventRouter = Router();


eventRouter.get('/events', getAllEventos);


eventRouter.get('/events/:id', getEventoById);

export default eventRouter;
