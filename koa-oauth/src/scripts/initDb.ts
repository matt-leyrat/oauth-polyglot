import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  password: 'letmein',
  host: 'localhost',
  port: 5432,
});

async function initDatabase() {
  try {
    await client.connect();

    // Create the user
    await client.query(`CREATE USER "koa-oauth" WITH PASSWORD 'koa-letmein';`);

    // Create the database
    await client.query(`CREATE DATABASE "user" OWNER "koa-oauth";`);

    console.log('Database and user created successfully!');
  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    await client.end();
  }
}

initDatabase();