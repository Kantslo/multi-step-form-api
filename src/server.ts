import express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
import connect from './config/mongo.js';
import formRouter from './routes/form-router.js';
import { swaggerMiddleware } from './middlewares';

dotenv.config();
connect();

const server = express();
server.use(cors());
server.use(BodyParser.json());

server.use("/api", formRouter);

server.use("/", ...swaggerMiddleware);

server.listen(process.env.PORT || 3000);