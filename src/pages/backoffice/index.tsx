import { PermissionName } from '@prisma/client';
import { GetServerSideProps, NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = context.req as NextApiRequest;
  const session = await getSession({ req });

  if (!session || !session.permissions.includes(PermissionName.ACCESS_BACKOFFICE)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function BackofficeHome() {
  return <main></main>;
}
