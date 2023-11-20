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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTickets = exports.validateTicket = exports.createTicket = void 0;
const TicketDAO_1 = __importDefault(require("../daos/TicketDAO"));
/**
 * @swagger
 * /tickets:
 *   post:
 *     tags:
 *       - Tickets
 *     description: Cria um novo ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isValid:
 *                 type: boolean
 *                 description: Indica se o ticket é válido
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: Data do ticket (formato ISO 8601)
 *               title:
 *                 type: string
 *                 description: Título do ticket
 *               description:
 *                 type: string
 *                 description: Descrição do ticket
 *               image_url:
 *                 type: string
 *                 nullable: true
 *                 description: URL da imagem associada ao ticket (opcional)
 *               quantity:
 *                 type: integer
 *                 description: Quantidade de tickets
 *               eventId:
 *                 type: integer
 *                 description: ID do evento associado ao ticket
 *     responses:
 *       201:
 *         description: Ticket criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do ticket criado
 *                 isValid:
 *                   type: boolean
 *                   description: Indica se o ticket é válido
 *                 date:
 *                   type: string
 *                   format: date-time
 *                   description: Data do ticket (formato ISO 8601)
 *                 title:
 *                   type: string
 *                   description: Título do ticket
 *                 description:
 *                   type: string
 *                   description: Descrição do ticket
 *                 image_url:
 *                   type: string
 *                   nullable: true
 *                   description: URL da imagem associada ao ticket (opcional)
 *                 quantity:
 *                   type: integer
 *                   description: Quantidade de tickets
 *                 eventId:
 *                   type: integer
 *                   description: ID do evento associado ao ticket
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
const createTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { isValid, date, title, description, image_url, quantity, eventId } = req.body;
        const newTicket = {
            isValid,
            date,
            title,
            description,
            image_url,
            quantity,
            eventId
        };
        const ticketDAO = new TicketDAO_1.default();
        const ticket = yield ticketDAO.createTicket(newTicket);
        res.status(201).json(ticket);
    }
    catch (error) {
        console.error('Erro ao criar ticket:', error);
        res.status(500).json({ message: 'Erro ao criar ticket.' });
    }
});
exports.createTicket = createTicket;
/**
 * @swagger
 * /tickets/validar/{idTicket}:
 *   get:
 *     tags:
 *       - Tickets
 *     description: Validar um ticket pelo ID
 *     parameters:
 *       - in: path
 *         name: idTicket
 *         required: true
 *         description: ID do ticket a ser validado.
 *     responses:
 *       200:
 *         description: Ticket validado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 validated:
 *                   type: boolean
 *                   description: Indica se o ticket foi validado com sucesso.
 */
const validateTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ticketDAO = new TicketDAO_1.default();
        const idTicket = Number(req.params.idTicket);
        const validated = yield ticketDAO.validateTicket(idTicket);
        res.status(200).json({ validated });
    }
    catch (error) {
        console.error('Erro ao validar o ticket:', error);
        res.status(500).json({ message: 'Erro ao validar o ticket.' });
    }
});
exports.validateTicket = validateTicket;
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
    try {
        const ticketDAO = new TicketDAO_1.default();
        const ticketsEvento = yield ticketDAO.getAllTickets();
        res.send(ticketsEvento);
    }
    catch (error) {
        console.error('Erro ao buscar tickets:', error);
        res.status(500).json({ message: 'Erro ao buscar tickets' });
    }
});
exports.getAllTickets = getAllTickets;
