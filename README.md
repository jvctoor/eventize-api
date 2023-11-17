# Eventize API

Eventize API é uma aplicação TypeScript construída utilizando o framework Express para fornecer serviços de gerenciamento de eventos.

## Configuração

Certifique-se de ter o Node.js instalado em sua máquina antes de prosseguir.

1. Clone este repositório:

```bash
git clone https://github.com/seu-nome-de-usuario/eventize-api.git
cd eventize-api
````

2. Instale as dependências:

```bash
npm install
````


3. Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias:
```plaintext
# Exemplo de conexão com o MySQL
DATABASE_URL=mysql://seu-usuario:senha@localhost:3306/nome-do-banco

# Chave secreta para autenticação
CHAVE_SECRETA=SuaChaveParaOJWT
````

4. Banco de Dados

Este projeto utiliza Prisma para gerenciar o banco de dados. Certifique-se de ter configurado corretamente o arquivo .env com a variável DATABASE_URL.

Execute as migrações do Prisma para criar o esquema do banco de dados:
```bash
npx prisma migrate dev --name init
````

5. Executando a Aplicação

Após configurar o arquivo .env e criar o banco de dados, você pode iniciar a aplicação:

```bash
npm start
````

A API estará disponível em http://localhost:3000.

6. Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Basta seguir estes passos:

- Faça um fork deste repositório.
- Crie uma nova branch (git checkout -b feature/nova-feature).
- Faça commit das suas alterações (git commit -am 'Adicionar nova feature').
- Faça push para a branch (git push origin feature/nova-feature).
- Abra um Pull Request.