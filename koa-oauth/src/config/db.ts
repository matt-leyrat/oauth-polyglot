import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('user', 'koa-oauth', 'koa-letmein', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

export async function initializeDb() {
  // 🔌 connect to db
  await sequelize.authenticate();
  console.log('Database connection has been established successfully.');
  // 🔄 Sync models/db
  await sequelize.sync();
  console.log('Models synced with the database.');
}
