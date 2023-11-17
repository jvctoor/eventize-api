// user.routes.ts

import { Router } from 'express';
import {
  createTicket,
  validateTicket
} from '../controllers/TicketController';

const ticketRouter = Router();


ticketRouter.post('/tickets', createTicket);

ticketRouter.get('/tickets/validar/:idTicket', validateTicket);

export default ticketRouter;
