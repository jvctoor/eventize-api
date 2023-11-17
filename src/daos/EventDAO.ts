import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

import { Event, Ticket, Categoria } from '../models/EventModel';

class EventDAO {

    async getAllEvents() {
        const events = await prisma.event.findMany({
            include: {
                categorias: true,
            },
        });
        return events;
    }

    async getEventById(id: number) {
        const events = await prisma.event.findUnique({
            where: {
                id: id,
            }, include: {
                tickets: true,
                categorias: true
            }
        });
        return events;
    }

  async createEvent(event: Event) {
    try {

        const categoriasData = event.categorias?.map(categoria => ({
            name: categoria.name,
            image_url: categoria.image_url,
        }));

        const eventCreated = await prisma.event.create({
            data: {
                title: event.title,
                subtitle: event.subtitle,
                image_url: event.image_url,
                price: event.price,
                info: event.info,
                description: event.description,
                categorias: {
                    create: categoriasData,
                },
            }, include: {
                categorias: true,
                tickets: true
            }
        });

        return eventCreated;
    } catch (error) {
        // Trate o erro como preferir (lançar, logar, etc.)
        console.error('Erro ao criar o evento:', error);
        throw new Error('Erro ao criar o evento');
    }
    }
  
    async deleteEvent(id: number) {
        return await prisma.event.delete({
            where: {
                id: id
            }
        })
    }

    async editEvent(event: Event) {
        const eventCreated = await prisma.event.update({
            where: {
                id: event.id
            },
            data: {
                title: event.title,
                subtitle: event.subtitle,
                image_url: event.image_url,
                price: event.price,
                info: event.info,
                description: event.description,
            },
        });

        return eventCreated;
    }

}

export default EventDAO;