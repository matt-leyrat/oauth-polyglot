import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('user', 'koa-oauth', 'koa-letmein', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});
