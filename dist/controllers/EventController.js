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
exports.getEventoById = exports.getAllEventos = void 0;
const EventDAO_1 = __importDefault(require("../daos/EventDAO"));
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
    try {
        const eventDAO = new EventDAO_1.default();
        const eventos = yield eventDAO.getAllEvents();
        // Se não houver eventos, retornar um código 404 (Not Found)
        if (!eventos || eventos.length === 0) {
            return res.status(404).json({ message: 'Nenhum evento encontrado.' });
        }
        const eventosFormatadoiOS = eventos.map((evento) => {
            var _a;
            const categorias = (_a = evento.categorias) !== null && _a !== void 0 ? _a : []; // Definindo um array vazio caso categorias seja null ou undefined
            return {
                id: evento.id,
                content: {
                    image_url: evento.image_url,
                    title: evento.title,
                    subtitle: evento.subtitle,
                    price: evento.price,
                    info: evento.info,
                    description: evento.description,
                    extra_bottom_info: categorias.map((categoria) => ({
                        image_url: categoria.image_url,
                        text: categoria.name
                    }))
                }
            };
        });
        // Retornar os eventos encontrados com o código 200 (OK)
        res.status(200).json(eventosFormatadoiOS);
    }
    catch (error) {
        // Em caso de erro, retornar um código 500 (Internal Server Error)
        console.error('Erro ao buscar eventos:', error);
        res.status(500).json({ message: 'Erro ao buscar eventos.' });
    }
});
exports.getAllEventos = getAllEventos;
/**
 * @swagger
 * /events/{idEvento}:
 *   post:
 *     tags:
 *       - Eventos
 *     description: Get evento by Id
 *     parameters:
 *       - in: path
 *         name: idEvento
 *         required: true
 *         description: Id do pedido.
 *     responses:
 *       200:
 *         description: Sucesso
 */
const getEventoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eventId = Number(req.params.id);
        // Verificar se o ID fornecido é um número válido
        if (isNaN(eventId) || eventId <= 0) {
            return res.status(400).json({ message: 'ID do evento inválido.' });
        }
        const eventDAO = new EventDAO_1.default();
        const evento = yield eventDAO.getEventById(eventId);
        // Se não encontrar o evento, retornar um código 404 (Not Found)
        if (!evento) {
            return res.status(404).json({ message: 'Evento não encontrado.' });
        }
        // Retornar o evento encontrado com o código 200 (OK)
        res.status(200).json(evento);
    }
    catch (error) {
        // Em caso de erro, retornar um código 500 (Internal Server Error)
        console.error('Erro ao buscar evento por ID:', error);
        res.status(500).json({ message: 'Erro ao buscar evento por ID.' });
    }
});
exports.getEventoById = getEventoById;
