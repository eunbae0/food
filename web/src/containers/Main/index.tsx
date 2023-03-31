import { useSelector } from 'react-redux';
import { indexState } from '@/modules';

import Header from '@/components/main/Header';
import Banner from '@/components/common/banner/Banner';
import Card from '@/components/common/card/Card';

import styles from '@/styles/Main.module.css';

export default function MainContainer() {
  const { isLogin, isLoading, user } = useSelector((state: indexState) => ({
    isLogin: state.userData.isLogin,
    isLoading: state.userData.isLoading,
    user: state.userData.user,
  }));
  return (
    <main>
      <Header />
      <Banner />
      <section className={styles.cardWrapper}>
        <Card card={'asdf'} />
        <Card card={'asdf'} />
        <Card card={'asdf'} />
      </section>
    </main>
  );
}
