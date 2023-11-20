import e, { request, Request, Response } from 'express';
import TicketDAO from '../daos/TicketDAO'

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
 export const createTicket = async (req: Request, res: Response) => {
    try {
        const {
          isValid,
          date,
          title,
          description,
          image_url,
          quantity,
          eventId 
        } = req.body;

        const newTicket = {
          isValid,
          date,
          title,
          description,
          image_url,
          quantity,
          eventId
        };
    
        const ticketDAO = new TicketDAO();
    
        const ticket = await ticketDAO.createTicket(newTicket);
    
        res.status(201).json(ticket);
      } catch (error) {
        console.error('Erro ao criar ticket:', error);
        res.status(500).json({ message: 'Erro ao criar ticket.' });
      }
}


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
export const validateTicket = async (req: Request, res: Response) => {
    try {
        const ticketDAO = new TicketDAO();
        const idTicket = Number(req.params.idTicket);
        const validated = await ticketDAO.validateTicket(idTicket);

        res.status(200).json({ validated });
    } catch (error) {
        console.error('Erro ao validar o ticket:', error);
        res.status(500).json({ message: 'Erro ao validar o ticket.' });
    }
}

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
  try {
      const ticketDAO = new TicketDAO();
      const ticketsEvento = await ticketDAO.getAllTickets();

      res.send(ticketsEvento)
  } catch (error) {
      console.error('Erro ao buscar tickets:', error);
      res.status(500).json({ message: 'Erro ao buscar tickets' });
  }
}






