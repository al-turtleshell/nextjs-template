import { PermissionName } from '@prisma/client';
import { GetServerSideProps, NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

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
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Turtleshell</h1>
        </div>
        <div> Backoffice </div>
      </main>
    </>
  );
}
