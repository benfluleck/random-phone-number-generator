import dotenv from 'dotenv';
import app from './server';

dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port,
  () => console.log(`Welcome to Phone generator application, listening on ${port}`));


export default app;
