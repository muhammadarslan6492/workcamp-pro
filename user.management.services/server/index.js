import Server from './config/server';
import RabbitConnection from './config/rabbit-mq';
import routes from './router';
import './config/env';

const SLEEP_TIME = process.env.SLEEP_TIME || 30000;

const main = async () => {
  const server = new Server().router(routes);
  server.listen(process.env.PORT);
  RabbitConnection.getInstance();
};

setTimeout(() => {
  main();
}, SLEEP_TIME);
