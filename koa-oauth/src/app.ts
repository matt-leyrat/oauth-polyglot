import Koa from 'koa';
import { sequelize } from './config/db';

const app = new Koa();

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    await sequelize.sync(); // Sync models with the database
    console.log('Models synced with the database.');

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
