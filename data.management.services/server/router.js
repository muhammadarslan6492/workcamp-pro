import Router from './dbIntegration/router/index';

export default function routes(app) {
  app.use('/api', Router);
}
