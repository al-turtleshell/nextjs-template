import NextAuth from 'next-auth/next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../prisma/client';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const newSession = { ...session, role: 'ADMIN' };
      return newSession;
    },
  },
});
