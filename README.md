# Eventize API

Eventize API is a TypeScript application built using the Express framework to provide event management services.

## Configuration

Make sure you have Node.js installed on your machine before proceeding.

1. Clone this repository:

```bash
git clone https://github.com/your-username/eventize-api.git
cd eventize-api
````

2. Install dependencies:

```bash
npm install
````


3. Create a .env file at the root of the project and define the necessary environment variables:
```plaintext
# Example MySQL connection string
DATABASE_URL=mysql://your-username:password@localhost:3306/database-name

# Secret key for authentication
SECRET_KEY=YourSecretKeyHere
````

4. Database

This project uses Prisma to manage the database. Make sure you have set up the .env file correctly with the DATABASE_URL variable.

Run Prisma migrations to create the database schema:
```bash
npx prisma migrate deploy
````

5. Running the Application

After setting up the .env file and creating the database, you can start the application:

```bash
npm start
````

The API will be available at http://localhost:3000.

6. Contributing

Feel free to contribute with improvements, bug fixes, or new features. Just follow these steps:

Fork this repository.
Create a new branch (git checkout -b feature/new-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Open a Pull Request.

7. License

This project is licensed under the MIT License - see the LICENSE file for details.