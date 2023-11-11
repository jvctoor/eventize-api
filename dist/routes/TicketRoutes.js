"use strict";
// user.routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TicketController_1 = require("../controllers/TicketController");
const ticketRouter = (0, express_1.Router)();
ticketRouter.get('/tickets', TicketController_1.getAllTickets);
ticketRouter.get('/tickets/validar/:idUsuario/:idEvento', TicketController_1.validateTicket);
exports.default = ticketRouter;
