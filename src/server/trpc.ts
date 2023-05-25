import { initTRPC } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import prisma from '../prisma/client';

interface CreateInnerContextOptions {
  session: Session | null;
}

export const createInnerContext = async (opts: CreateInnerContextOptions) => {
  const { session } = opts;

  if (!session) {
    return {
      prisma,
      session: { role: 'guest' },
    };
  }

  return { session, prisma };
};
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req } = opts;

  const session = await getSession({
    req: {
      headers: {
        cookie: req.headers.cookie,
      },
    },
  });

  const innerContext = await createInnerContext({ session });

  return {
    ...innerContext,
    req: opts.req,
    res: opts.res,
  };
};

const t = initTRPC.context<typeof createInnerContext>().create();

export const router = t.router;

export const publicProcedure = t.procedure;
