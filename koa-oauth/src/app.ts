import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'howdy 🤠';
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
