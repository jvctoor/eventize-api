"use strict";
// user.routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TicketController_1 = require("../controllers/TicketController");
const ticketRouter = (0, express_1.Router)();
ticketRouter.post('/tickets', TicketController_1.createTicket);
ticketRouter.get('/tickets/validar/:idTicket', TicketController_1.validateTicket);
exports.default = ticketRouter;
