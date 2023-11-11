import { PrismaClient, Prisma } from '@prisma/client'
import { User } from '../models/UserModel'
import internal from 'stream';
const prisma = new PrismaClient()
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class UserDAO {

  async createUser(user: User) {
    const senhaHash = await bcrypt.hash(user.password, 10);

    const novoUsuario = await prisma.user.create({
      data: {
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        password: senhaHash,
      },
    });

    return novoUsuario
  }

  async getByNickname(nickname: string) {
    const user = await prisma.user.findUnique({
      where: {
        nickname: nickname,
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user
  }

  async getById(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user
  }

  async getByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user
  }

}

export default UserDAO;