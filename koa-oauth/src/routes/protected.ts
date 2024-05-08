import Router from 'koa-router';
import authMiddleware from '../middleware/auth';

const router = new Router();

// Protected route
router.get('/protected', authMiddleware, async (ctx) => {
  ctx.body = { message: 'Welcome to a protected route!' };
});

export default router;
