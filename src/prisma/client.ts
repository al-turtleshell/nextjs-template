import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type UserWithPermissions = Prisma.UserGetPayload<{ include: { permissions: true } }>;

export default prisma;
