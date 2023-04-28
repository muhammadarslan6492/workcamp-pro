import Server from './config/server';
import RabbitConnection from './config/rabbit-mq';
import routes from './router';
import './config/env';
import db from './config/db';

const SLEEP_TIME = process.env.SLEEP_TIME || 30000;

const main = async () => {
  db();
  const server = new Server().router(routes);
  server.listen(process.env.PORT);
  // RabbitConnection.getInstance();
};

// setTimeout(() => {
//   main();
// }, SLEEP_TIME);

main();
