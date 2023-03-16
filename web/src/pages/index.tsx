import Head from 'next/head';
import MainContainer from '@/containers/Main';

export default function Main() {
  return (
    <>
      <Head>
        <title>Food</title>
        <meta name="description" content="food share" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <MainContainer />
    </>
  );
}
