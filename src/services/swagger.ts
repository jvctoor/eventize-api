// swagger.ts

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Eventize API',
      version: '1.0.0',
      description: 'Documentação da Eventize API',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Substitua pela URL do seu servidor
      },
    ],
  },
  apis: ['./src/**/*.ts'], // Substitua pelo caminho correto dos seus arquivos de rotas
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
