import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { trpc } from '../utils/trpc';
import { SessionProvider } from 'next-auth/react';
import DefaultLayout from '../components/templates/defaultLayout';
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session} refetchOnWindowFocus={true} refetchInterval={5 * 60}>
      <RecoilRoot>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </RecoilRoot>
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
