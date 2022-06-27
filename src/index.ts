import express from 'express';
import App from './services/ExpressApp';
import dbConnection from './services/Database';
import { PORT } from './config';
import { json } from 'body-parser';


const startServer = async () => {

  const app = express();
  app.use(json());

  await dbConnection();
  await App(app);

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })

}

startServer();
