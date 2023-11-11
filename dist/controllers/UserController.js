"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.signup = exports.login = void 0;
const UserDAO_1 = __importDefault(require("../daos/UserDAO"));
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const usuarioDAO = new UserDAO_1.default();
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
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("comecei a buscar");
        const user = yield usuarioDAO.getByNickname(req.body.nickname);
        console.log(user);
        if (!user) {
            res.send(400);
        }
        const senha = req.body.password;
        const senhaCorreta = yield bcrypt.compare(senha, user.password);
        if (!senhaCorreta) {
            res.send(401);
        }
        const token = jwt.sign({ id: user.id, email: user.email, nickname: user.nickname, name: user.name }, process.env.CHAVE_SECRETA, { expiresIn: '7d' });
        res.send({ authToken: token });
    }
    catch (error) {
        res.status(400).send("Usuário não encontrado");
    }
});
exports.login = login;
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
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, nickname, email, password } = req.body;
        // Verificar se o e-mail já está cadastrado
        try {
            const usuarioExistente = yield usuarioDAO.getByNickname(nickname);
            if (usuarioExistente) {
                return res.status(400).json({ mensagem: 'Este usuário já está cadastrado' });
            }
        }
        catch (error) {
            console.log("Erro no get");
        }
        const userModel = {
            name,
            nickname,
            password,
            email
        };
        // Criar um novo usuário
        const novoUsuario = yield usuarioDAO.createUser(userModel);
        return res.send({ mensagem: 'Usuário cadastrado com sucesso', usuario: novoUsuario });
    }
    catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        return res.status(500).json({ mensagem: 'Ocorreu um erro ao cadastrar o usuário' });
    }
});
exports.signup = signup;
