import e, { request, Request, Response } from 'express';
import { eventoData } from '../mocks/eventoData';

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
export const getAllEventos = async (req: Request, res: Response) => {
    res.send(eventoData)
}

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
export const getEventoById = async (req: Request, res: Response) => {
    res.send(eventoData[0])
}






