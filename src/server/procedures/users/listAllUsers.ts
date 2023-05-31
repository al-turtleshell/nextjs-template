import { procedure } from '../../trpc';
import { listUsers } from '../../repositories/user.repository';
import { PermissionName } from '@prisma/client';

const permissionsNeeded = [PermissionName.ACCESS_BACKOFFICE];

const listAllUsers = procedure(permissionsNeeded).query(async () => {
  const users = await listUsers();

  return users;
});

export default listAllUsers;
