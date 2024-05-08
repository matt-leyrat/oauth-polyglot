import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import { sequelize } from './config/db';
import authRouter from './routes/auth';
import protectedRouter from './routes/protected';

const app = new Koa();

async function main() {
  try {
    // 🔌 connect to db
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    await sequelize.sync(); // Sync models with the database
    console.log('Models synced with the database.');
    // ✅ register routes
    app.use(bodyParser());
    app.use(authRouter.routes());
    app.use(authRouter.allowedMethods());
    app.use(protectedRouter.routes());
    app.use(protectedRouter.allowedMethods());
    // 🚀 start server
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
