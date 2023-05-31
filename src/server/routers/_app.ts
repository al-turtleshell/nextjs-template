import { publicProcedure, router } from '../trpc';
import userRouter from './user.router';

export const appRouter = router({
  users: userRouter,
  hello: publicProcedure.query(() => 'Hello world!'),
});

export type AppRouter = typeof appRouter;
