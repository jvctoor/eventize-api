"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTicket = exports.getAllTickets = void 0;
const ticketData_1 = require("../mocks/ticketData");
/**
 * @swagger
 * /tickets:
 *   get:
 *     tags:
 *       - Tickets
 *     description: Get todos os tickets
 *     responses:
 *       200:
 *         description: Sucesso
 */
const getAllTickets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(ticketData_1.ticketData);
});
exports.getAllTickets = getAllTickets;
/**
 * @swagger
 * /tickets/validar/{idUsuario}/{idEvento}:
 *   get:
 *     tags:
 *       - Tickets
 *     description: Validar tickets
 *     parameters:
 *       - in: path
 *         name: idUsuario
 *         required: true
 *         description: Id do pedido.
 *       - in: path
 *         name: idEvento
 *         required: true
 *         description: Id do pedido.
 *     responses:
 *       200:
 *         description: Sucesso
 */
const validateTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(true);
});
exports.validateTicket = validateTicket;
