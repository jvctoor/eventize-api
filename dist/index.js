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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const server_1 = __importDefault(require("./server"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const EventRoutes_1 = __importDefault(require("./routes/EventRoutes"));
const TicketRoutes_1 = __importDefault(require("./routes/TicketRoutes"));
const swagger_1 = require("./services/swagger");
const body_parser_1 = __importDefault(require("body-parser"));
dotenv.config();
server_1.default.use(body_parser_1.default.json());
server_1.default.use('/', UserRoutes_1.default);
server_1.default.use('/', EventRoutes_1.default);
server_1.default.use('/', TicketRoutes_1.default);
server_1.default.use('/api-docs', swagger_1.swaggerUi.serve, swagger_1.swaggerUi.setup(swagger_1.specs));
server_1.default.get('/', (req, res) => {
    res.send("Hello Eventize");
});
