import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';

import { createProxyMiddleware } from 'http-proxy-middleware';
import urls from './urls';

config();

const PORT = process.env.PORT;
const app = express();

app.use(morgan('dev'));

const optionsUsers = {
  target: urls.USER_URL,
  changeOrigin: true,
  logger: console,
};

const userProxy = createProxyMiddleware(optionsUsers);

try {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Api endpoint is open' });
  });
  // user-management-services***** all api endpoints ******
  app.get('/test', userProxy);
  app.listen(PORT, () => {
    console.log(`Api Endpoint server running on ${PORT}`);
  });
} catch (err) {
  console.log(err.message);
}
