import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { createProxyMiddleware } from 'http-proxy-middleware';

import urls from './urls';

const swaggerDocument = YAML.load('./swagger.yaml');

const options = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'WorkCamp',
};

config();

const PORT = process.env.PORT;
const app = express();

app.use(morgan('dev'));

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options),
);

const optionsUsers = {
  target: urls.USER_URL,
  changeOrigin: true,
  logger: console,
};

const optionsCamp = {
  target: urls.CAMP_URL,
  changeOrigin: true,
  logger: console,
};

const userProxy = createProxyMiddleware(optionsUsers);
const campProxy = createProxyMiddleware(optionsCamp);

try {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Api endpoint is open' });
  });

  // camp-management-services************* Api endpoints****************

  app.post('/camp-availability', campProxy);

  // user-management-services***** all api endpoints ******
  app.get('/test', userProxy);
  app.listen(PORT, () => {
    console.log(`Api Endpoint server running on ${PORT}`);
  });
} catch (err) {
  console.log(err.message);
}
