"use strict";
// user.routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EventController_1 = require("../controllers/EventController");
const eventRouter = (0, express_1.Router)();
eventRouter.get('/events', EventController_1.getAllEventos);
eventRouter.get('/events/:id', EventController_1.getEventoById);
exports.default = eventRouter;
