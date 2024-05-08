import Router from 'koa-router';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { createUser, findUser } from '../controller/user';

interface RegisterRequestBody {
  username: string;
  email: string;
  password: string;
}

interface LoginRequestBody {
  username: string;
  email: string;
  password: string;
}

const router = new Router();

router.post('/auth/register', async (ctx) => {
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

router.post('/auth/login', async (ctx) => {
  try {
    const { email, password } = ctx.request.body as LoginRequestBody;

    // Find the user by email
    const user = await findUser(email);
    if (!user) {
      ctx.status = 401; // Unauthorized
      ctx.body = { error: 'User not found' };
      return;
    }

    // Compare the hashed password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      ctx.status = 401; // Unauthorized
      ctx.body = { error: 'Invalid email or password' };
      return;
    }

    // Generate a JWT
    // TODO: use environment variable for secret key
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

    // Return the JWT in the response
    ctx.status = 200; // OK
    ctx.body = { token };
  } catch (err) {
    ctx.status = 500; // Internal Server Error
    ctx.body = { error: 'An error occurred' };
  }
});

export default router;
