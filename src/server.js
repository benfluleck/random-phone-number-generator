import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import { indexRouter } from './routes/index';
import setGlobalMiddleware from './middleware/setGlobalMiddleware';

dotenv.config();


const app = express();

app.use(cors());

setGlobalMiddleware(app);
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/v1', indexRouter);

app
  .get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')));

app.use((req, res, next) => {
  const error = new Error('Not Found');

  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
  next();
});


export default app;
