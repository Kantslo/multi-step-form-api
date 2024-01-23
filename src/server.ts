import express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';
import { swaggerMiddleware } from './middlewares';

const server = express();
server.use(cors());
server.use(BodyParser.json());

server.use("/", ...swaggerMiddleware)

server.listen(process.env.PORT || 3000);