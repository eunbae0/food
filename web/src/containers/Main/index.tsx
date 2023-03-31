import { userState } from '@/modules/user';
import { useSelector } from 'react-redux';

import Header from '@/components/main/Header';
import Banner from '@/components/common/banner/Banner';
import Card from '@/components/common/card/Card';

import styles from '@/styles/Main.module.css';

export default function MainContainer() {
  const { isLogin, isLoading, user } = useSelector((state: userState) => ({
    isLogin: state.isLogin,
    isLoading: state.isLoading,
    user: state.user,
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
