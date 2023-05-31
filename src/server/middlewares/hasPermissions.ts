import { PermissionName } from '@prisma/client';
import { middleware } from '../trpc';
import { TRPCError } from '@trpc/server';

const hasPermissions = (permissions: PermissionName[]) =>
  middleware(async ({ ctx, next }) => {
    const { session } = ctx;

    if (permissions.every((permission) => session.permissions.includes(permission))) {
      return next();
    }

    throw new TRPCError({ code: 'FORBIDDEN', message: 'You do not have permission to do this' });
  });

export default hasPermissions;
