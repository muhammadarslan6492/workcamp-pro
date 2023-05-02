import IndexRouter from './modules/router/index';

export default function routes(app) {
  app.use('/api', IndexRouter);
}
