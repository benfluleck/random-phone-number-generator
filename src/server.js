import express from 'express';

import { indexRouter } from './routes/index';
import setGlobalMiddleware from './middleware/setGlobalMiddleware';


const app = express();

setGlobalMiddleware(app);

app.use('/api/v1', indexRouter);


app.use((req, res, next) => {
  const error = new Error('Not found');
  
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
