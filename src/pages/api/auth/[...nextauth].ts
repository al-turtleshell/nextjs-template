import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../prisma/client";
import GoogleProvider from "next-auth/providers/google";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            const newSession = {...session, role: 'ADMIN'}
            return newSession;
        },
    }
})