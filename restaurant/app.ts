import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { currentUser, errorHandler, NotFoundError } from '@tdfoodorder/common';
import { apiRouter } from './src/routes/route';

const app = express();
app.set('trust proxy', true);
app.use(json());

app.use(currentUser)

app.use('/api', apiRouter)

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
