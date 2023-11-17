import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

import { Event, Ticket, Categoria } from '../models/EventModel';

class TicketDAO {

    async createTicket(ticket: Ticket) {
        return prisma.ticket.create({
            data: {
                isValid: ticket.isValid,
                date: ticket.date,
                title: ticket.title,
                description: ticket.description,
                image_url: ticket.image_url,
                quantity: ticket.quantity,
                event: { connect: { id: ticket.eventId } },
            }
        })
    }

    async validateTicket(id: number) {
        return prisma.ticket.update({
            where: {
                id: id,
            }, data: {
                isValid: false
            }, 
        })
    }

}

export default TicketDAO;