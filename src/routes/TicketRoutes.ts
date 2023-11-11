// user.routes.ts

import { Router } from 'express';
import {
  getAllTickets,
  validateTicket
} from '../controllers/TicketController';

const ticketRouter = Router();


ticketRouter.get('/tickets', getAllTickets);

ticketRouter.get('/tickets/validar/:idUsuario/:idEvento', validateTicket);

export default ticketRouter;
