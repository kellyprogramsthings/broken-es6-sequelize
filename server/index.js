import express, { json } from 'express';
import cors from 'cors';
import routes from '../routes/index.js';

const server = express();
server.use(cors());
server.use(json());

server.use('/api', routes);

export default server;