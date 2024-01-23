import express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(BodyParser.json());

server.listen(3000);