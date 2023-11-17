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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventDAO_1 = __importDefault(require("./daos/EventDAO"));
const TicketDAO_1 = __importDefault(require("./daos/TicketDAO"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const eventDAO = new EventDAO_1.default();
        const ticketDAO = new TicketDAO_1.default();
        const categorias = [
            {
                name: "Trap", image_url: null
            },
            {
                name: "Sertanejo", image_url: null
            },
            {
                name: "Sei la", image_url: null
            }
        ];
        const evento = {
            title: "Show do matuê",
            subtitle: "Show top",
            image_url: "https://chat.openai.com",
            price: 120,
            info: "Info",
            description: "Descricao",
            categorias: categorias,
        };
        const evento2 = {
            id: 2,
            title: "Show do matuê",
            subtitle: "Show top",
            image_url: "https://chat.openai.com",
            price: 120,
            info: "Info",
            description: "Descricao",
            categorias: categorias,
        };
        const ticketCriar = {
            isValid: true,
            date: new Date(),
            title: evento.title,
            description: evento.description,
            image_url: evento.image_url,
            quantity: 5,
            eventId: evento2.id,
        };
        //const eventoCriado = await eventDAO.createEvent(evento);
        //const ticketCriado = await ticketDAO.createTicket(ticketCriar);
        yield ticketDAO.validateTicket(2);
        const eventoMatue = yield eventDAO.getEventById(2);
        console.log(eventoMatue);
    });
}
main();
