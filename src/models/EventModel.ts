/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: ID do evento (opcional)
 *         title:
 *           type: string
 *           description: Título do evento
 *         subtitle:
 *           type: string
 *           description: Subtítulo do evento
 *         image_url:
 *           type: string
 *           nullable: true
 *           description: URL da imagem do evento (opcional)
 *         price:
 *           type: number
 *           description: Preço do evento
 *         info:
 *           type: string
 *           description: Informações sobre o evento
 *         description:
 *           type: string
 *           description: Descrição do evento
 *         tickets:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Ticket'
 *           description: Lista de tickets relacionados ao evento (opcional)
 *         categorias:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Categoria'
 *           description: Lista de categorias relacionadas ao evento (opcional)
 */
export interface Event {
    id?: number;
    title: string;
    subtitle: string;
    image_url?: string | null;
    price: number;
    info: string;
    description: string;
    tickets?: Ticket[] | [];
    categorias?: Categoria[] | [];
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Ticket:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: ID do ticket (opcional)
 *         isValid:
 *           type: boolean
 *           description: Indicação de validade do ticket
 *         date:
 *           type: string
 *           format: date-time
 *           description: Data do ticket
 *         title:
 *           type: string
 *           description: Título do ticket
 *         description:
 *           type: string
 *           description: Descrição do ticket
 *         image_url:
 *           type: string
 *           nullable: true
 *           description: URL da imagem do ticket (opcional)
 *         quantity:
 *           type: number
 *           description: Quantidade do ticket
 *         eventId:
 *           type: number
 *           description: ID do evento associado ao ticket (opcional)
 *         event:
 *           $ref: '#/components/schemas/Event'
 *           description: Evento associado ao ticket (opcional)
 */
export interface Ticket {
    id?: number;
    isValid: boolean;
    date: Date;
    title: string;
    description: string;
    image_url?: string | null;
    quantity: number;
    eventId?: number;
    event?: Event; 
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Categoria:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: ID da categoria (opcional)
 *         name:
 *           type: string
 *           description: Nome da categoria
 *         image_url:
 *           type: string
 *           nullable: true
 *           description: URL da imagem da categoria (opcional)
 */
export interface Categoria {
    id?: number;
    name: string;
    image_url?: string | null;
}
