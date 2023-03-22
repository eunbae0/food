import '@/styles/globals.css';
import 'reset-css';
import type { AppProps } from 'next/app';
import Header from '@/components/header/Header';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="global">
      <Header user={true} header={router.pathname} />
      <Component {...pageProps} />
    </div>
  );
}
