import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { trpc } from '../utils/trpc'
import { SessionProvider } from 'next-auth/react'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider 
      session={pageProps.session}
      refetchOnWindowFocus={true}
      refetchInterval={5 * 60}
    >
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default trpc.withTRPC(App);