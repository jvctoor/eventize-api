/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nome do usuário
 *         nickname:
 *           type: string
 *           description: Apelido do usuário
 *         email:
 *           type: string
 *           description: E-mail do usuário
 *         password:
 *           type: string
 *           description: Senha do usuário
 */
export interface User {
    id?: number;
    name: string;
    nickname: string;
    email: string;
    password: string;
  }
  