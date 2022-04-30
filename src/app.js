import express from 'express';
// var path = require('path');
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from './routes/index.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

export default app;
