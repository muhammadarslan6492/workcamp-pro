import Server from './config/server';
import RabbitConnection from './config/rabbit-mq';
import './config/env';
import IndexRouter from './modules/router/index';

const SLEEP_TIME = process.env.SLEEP_TIME || 30000;

const main = async () => {
  const server = new Server(IndexRouter);
  server.listen(process.env.PORT);
  // RabbitConnection.getInstance();
};

main();

// setTimeout(() => {
//   main();
// }, SLEEP_TIME);
