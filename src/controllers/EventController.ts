import e, { request, Request, Response } from 'express';
import EventDAO from '../daos/EventDAO'

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
    try {
        const eventDAO = new EventDAO();
        const eventos: any = await eventDAO.getAllEvents();
    
        // Se não houver eventos, retornar um código 404 (Not Found)
        if (!eventos || eventos.length === 0) {
          return res.status(404).json({ message: 'Nenhum evento encontrado.' });
        }

        const eventosFormatadoiOS = eventos.map((evento: { categorias: never[]; id: any; image_url: any; title: any; subtitle: any; price: any; info: any; description: any; }) => {
          const categorias = evento.categorias ?? []; // Definindo um array vazio caso categorias seja null ou undefined
        
          return {
            id: evento.id,
            content: {
              image_url: evento.image_url,
              title: evento.title,
              subtitle: evento.subtitle,
              price: evento.price,
              info: evento.info,
              description: evento.description,
              extra_bottom_info: categorias.map((categoria: { image_url: any; name: any; }) => ({
                image_url: categoria.image_url,
                text: categoria.name
              }))
            }
          };
        });
        
    
        // Retornar os eventos encontrados com o código 200 (OK)
        res.status(200).json(eventosFormatadoiOS);
      } catch (error) {
        // Em caso de erro, retornar um código 500 (Internal Server Error)
        console.error('Erro ao buscar eventos:', error);
        res.status(500).json({ message: 'Erro ao buscar eventos.' });
      }
}

/**
 * @swagger
 * /events/{idEvento}:
 *   get:
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
    try {
        const eventId = Number(req.params.id);
    
        // Verificar se o ID fornecido é um número válido
        if (isNaN(eventId) || eventId <= 0) {
          return res.status(400).json({ message: 'ID do evento inválido.' });
        }
    
        const eventDAO = new EventDAO();
        const evento = await eventDAO.getEventById(eventId);
    
        // Se não encontrar o evento, retornar um código 404 (Not Found)
        if (!evento) {
          return res.status(404).json({ message: 'Evento não encontrado.' });
        }
    
        // Retornar o evento encontrado com o código 200 (OK)
        res.status(200).json(evento);
      } catch (error) {
        // Em caso de erro, retornar um código 500 (Internal Server Error)
        console.error('Erro ao buscar evento por ID:', error);
        res.status(500).json({ message: 'Erro ao buscar evento por ID.' });
      }
}






