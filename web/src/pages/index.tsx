import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import Card from '@/components/card/Card';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Food</title>
        <meta name="description" content="food share" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Header user={true} />
        <section className={styles.bannerWrapper}></section>
        <section className={styles.cardWrapper}>
          <Card card={'asdf'} />
          <Card card={'asdf'} />
          <Card card={'asdf'} />
        </section>
      </main>
    </>
  );
}
