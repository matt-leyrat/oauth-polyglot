import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import { initializeDb } from './config/db';
import authRouter from './routes/auth';
import protectedRouter from './routes/protected';

const app = new Koa();

function registerRoutes() {
  app.use(bodyParser());
  app.use(authRouter.routes());
  app.use(authRouter.allowedMethods());
  app.use(protectedRouter.routes());
  app.use(protectedRouter.allowedMethods());
}

async function main() {
  await initializeDb();
  registerRoutes();
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

main()
  .then(() => console.log('koa-oauth: ready to rumble!'))
  .catch((e) => console.error(e));
