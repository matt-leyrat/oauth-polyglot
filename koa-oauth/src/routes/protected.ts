import Router from 'koa-router';
import jwt from 'koa-jwt';

const router = new Router();
const secret = 'your_secret_key'; // Replace with your actual secret key

// Middleware to check for JWT token
router.use(jwt({ secret }));

// Protected route
router.get('/protected', async (ctx) => {
  ctx.body = { message: 'This is a protected route' };
});

export default router;
