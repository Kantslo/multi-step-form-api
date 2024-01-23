import express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
import { swaggerMiddleware } from './middlewares';
import connect from 'config/mongo.js';

dotenv.config();
connect();

const server = express();
server.use(cors());
server.use(BodyParser.json());

server.use("/", ...swaggerMiddleware)

server.listen(process.env.PORT || 3000);