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
exports.getEventoById = exports.getAllEventos = void 0;
const eventoData_1 = require("../mocks/eventoData");
/**
 * @swagger
 * /events:
 *   get:
 *     tags:
 *       - Eventos
 *     description: Get todos os eventos
 *     responses:
 *       200:
 *         description: Sucesso
 */
const getAllEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(eventoData_1.eventoData);
});
exports.getAllEventos = getAllEventos;
/**
 * @swagger
 * /events/{idPedido}:
 *   post:
 *     tags:
 *       - Eventos
 *     description: Get pedido by Id
 *     parameters:
 *       - in: path
 *         name: idPedido
 *         required: true
 *         description: Id do pedido.
 *     responses:
 *       200:
 *         description: Sucesso
 */
const getEventoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(eventoData_1.eventoData[0]);
});
exports.getEventoById = getEventoById;
