import Router from 'koa-router';
import { createUser } from '../controller/auth';

interface RegisterRequestBody {
  username: string;
  email: string;
  password: string;
}

const router = new Router();

router.post('/user/register', async (ctx) => {
  try {
    // Get user data from request body
    const { username, email, password } = ctx.request.body as RegisterRequestBody;

    // Call createUser function from authController
    const user = await createUser(username, email, password);

    // Set response status and body
    ctx.status = 201; // Created
    ctx.body = user;
  } catch (err: unknown) {
    // Handle errors
    ctx.status = 400; // Bad Request
    ctx.body = { error: err };
  }
});

export default router;
