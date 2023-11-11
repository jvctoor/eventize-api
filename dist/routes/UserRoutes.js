"use strict";
// user.routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userRouter = (0, express_1.Router)();
userRouter.post('/auth/signup', UserController_1.signup);
userRouter.post('/auth/login', UserController_1.login);
exports.default = userRouter;
