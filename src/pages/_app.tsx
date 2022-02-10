import 'tailwindcss/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp;
