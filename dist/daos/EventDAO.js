"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class EventDAO {
    getAllEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            const events = yield prisma.event.findMany({
                include: {
                    categorias: true,
                },
            });
            return events;
        });
    }
    getEventById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const events = yield prisma.event.findUnique({
                where: {
                    id: id,
                }, include: {
                    tickets: true,
                    categorias: true
                }
            });
            return events;
        });
    }
    createEvent(event) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriasData = (_a = event.categorias) === null || _a === void 0 ? void 0 : _a.map(categoria => ({
                    name: categoria.name,
                    image_url: categoria.image_url,
                }));
                const eventCreated = yield prisma.event.create({
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
            }
            catch (error) {
                // Trate o erro como preferir (lançar, logar, etc.)
                console.error('Erro ao criar o evento:', error);
                throw new Error('Erro ao criar o evento');
            }
        });
    }
    deleteEvent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.event.delete({
                where: {
                    id: id
                }
            });
        });
    }
    editEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventCreated = yield prisma.event.update({
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
        });
    }
}
exports.default = EventDAO;
