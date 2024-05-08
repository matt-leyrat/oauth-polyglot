import jwt from 'koa-jwt';

const secret = 'your_secret_key'; // Replace with your actual secret key

const authMiddleware = jwt({ secret });

export default authMiddleware;
