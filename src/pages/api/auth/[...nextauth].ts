import NextAuth from 'next-auth/next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../prisma/client';
import GoogleProvider from 'next-auth/providers/google';
import { applyBasicPermission, findUserPermission } from '../../../server/repositories/user.repository';
import { Session } from 'next-auth';
import { PermissionName } from '@prisma/client';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }): Promise<Session & { permissions: PermissionName[] }> {
      const userWithPermission = await findUserPermission(user.id);

      return { ...session, permissions: userWithPermission?.permissions ?? [] };
    },

    async signIn({ user }): Promise<boolean> {
      if (!user || !user.email) {
        return false;
      }

      const email = user.email;
      await applyBasicPermission(email);

      return true;
    },
  },
});
