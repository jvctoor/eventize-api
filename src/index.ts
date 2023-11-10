import * as dotenv from 'dotenv';
import app from './server';
import express, { Express, Request, Response } from 'express';
dotenv.config();


app.get('/', (req: Request, res: Response) => {
    res.send("Hello Eventize");
  });