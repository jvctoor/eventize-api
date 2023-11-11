import UserDAO from '../daos/UserDAO'
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import e, { request, Request, Response } from 'express';
import {User} from '../models/UserModel'

const usuarioDAO = new UserDAO()

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autentica um usuário
 *     tags:
 *       - Auth
 *     description: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - nickname
 *               - password
 *     responses:
 *       200:
 *         description: Sucesso
 */
export const login = async (req: Request, res: Response) => {

    try {
        console.log("comecei a buscar")
        const user = await usuarioDAO.getByNickname(req.body.nickname)
        console.log(user)

        if (!user) {
            res.send(400)
        }
        const senha = req.body.password;
        const senhaCorreta = await bcrypt.compare(senha, user.password);
        
        if (!senhaCorreta) {
            res.send(401)
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, nickname: user.nickname, name: user.name },
            process.env.CHAVE_SECRETA as string,
            { expiresIn: '7d' } 
        );

        res.send({authToken: token});
    } catch (error) {
        res.status(400).send("Usuário não encontrado")
    }
}

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               mensagem: Usuário cadastrado com sucesso
 *               usuario:
 *                 id: 1
 *                 name: John Doe
 *                 nickname: john.doe
 *                 email: john.doe@example.com
 *       '400':
 *         description: Este usuário já está cadastrado
 *         content:
 *           application/json:
 *             example:
 *               mensagem: Este usuário já está cadastrado
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             example:
 *               mensagem: Ocorreu um erro ao cadastrar o usuário
 */
export const signup = async (req: Request, res: Response) => {
    try {
        const { name, nickname, email, password } = req.body;

        // Verificar se o e-mail já está cadastrado
        try {
            const usuarioExistente = await usuarioDAO.getByNickname(nickname);

            if (usuarioExistente) {
                return res.status(400).json({ mensagem: 'Este usuário já está cadastrado' });
            }
        } catch(error) {
            console.log("Erro no get")
        }

        const userModel: User = {
            name,
            nickname,
            password,
            email
        }

        // Criar um novo usuário
        const novoUsuario = await usuarioDAO.createUser(userModel);

        return res.send({ mensagem: 'Usuário cadastrado com sucesso', usuario: novoUsuario });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        return res.status(500).json({ mensagem: 'Ocorreu um erro ao cadastrar o usuário' });
    }
}

