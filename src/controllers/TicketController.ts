import e, { request, Request, Response } from 'express';
import { ticketData } from '../mocks/ticketData';

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
export const getAllTickets = async (req: Request, res: Response) => {
    res.send(ticketData)
}

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
export const validateTicket = async (req: Request, res: Response) => {
    res.send(true)
}






