import { User, PermissionName } from '@prisma/client';
import prisma from '../../prisma/client';

export const findUserPermission = async (
  userId: string,
): Promise<(User & { permissions: PermissionName[] }) | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      permissions: true,
    },
  });

  if (user) {
    return {
      ...user,
      permissions: user.permissions.map((permission) => permission.name),
    };
  }

  return null;
};

export const applyBasicPermission = async (userEmail: string): Promise<void> => {
  await prisma.user.update({
    where: {
      email: userEmail,
    },
    data: {
      permissions: {
        connect: [
          {
            name: PermissionName.ACCESS_APPLICATION,
          },
        ],
      },
    },
  });
};

export const listUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany({
    include: {
      permissions: true,
    },
  });
};
