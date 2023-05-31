import listAllUsers from '../procedures/users/listAllUsers';
import { router } from '../trpc';

const userRouter = router({
  listAll: listAllUsers,
});

export default userRouter;
