import * as dotenv from 'dotenv';
import app from './server';
import userRouter from './routes/UserRoutes'
import eventRouter from './routes/EventRoutes'
import ticketRouter from './routes/TicketRoutes'
import express, { Express, Request, Response } from 'express';
import { specs, swaggerUi } from './services/swagger';
import bodyParser from 'body-parser';
dotenv.config();

app.use(bodyParser.json())

app.use('/api', userRouter)
app.use('/api', eventRouter)
app.use('/api', ticketRouter)


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req: Request, res: Response) => {
    res.send("Hello Eventize");
  });