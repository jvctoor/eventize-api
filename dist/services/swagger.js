"use strict";
// swagger.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUi = exports.specs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Eventize API',
            version: '1.0.0',
            description: 'Documentação da API de Usuários',
        },
    },
    apis: ['./**/*.ts'], // Substitua pelo caminho correto dos seus arquivos de rotas
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.specs = specs;
