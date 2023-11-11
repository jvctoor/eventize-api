// swagger.ts

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

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

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
