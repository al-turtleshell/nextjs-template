import { FC, ReactNode, Suspense } from 'react';
import Head from 'next/head';
import Header from '../organisms/header/header';
import Skeleton from '../atoms/skeleton';

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Head>
        <title>Template application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </Suspense>
  );
};

export default DefaultLayout;
