import Skeleton from '../../components/atoms/skeleton';
import { trpc } from '../../utils/trpc';

const Users = () => {
  const { data, isLoading, isError } = trpc.users.listAll.useQuery();
  if (isLoading || !data) return <Skeleton />;

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Picture
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>

            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Permission
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((user) => (
            <tr key={user.email}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={user.image} alt="User" className="h-8 w-8 rounded-full" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>

              <td className="px-6 py-4 whitespace-nowrap">{user.permissions.map((perm) => perm.name).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
