import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from "helmet";
import cookieParser from "cookie-parser"

import { setupRoutes } from './routes.js';

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(cookieParser())

setupRoutes(app);

app.listen(3333, () => {
    console.log('[API] server listening on http://localhost:3333');
});