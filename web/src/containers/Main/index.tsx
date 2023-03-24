import Header from '@/components/header/Header';
import Card from '@/components/card/Card';
import styles from '@/styles/Main.module.css';
import { useSelector } from 'react-redux';
import { userState } from '@/modules/user';

export default function MainContainer() {
  const { isLogin, isLoading, user } = useSelector((state: userState) => ({
    isLogin: state.isLogin,
    isLoading: state.isLoading,
    user: state.user,
  }));
  return (
    <main>
      <section className={styles.bannerWrapper}></section>
      <section className={styles.cardWrapper}>
        <Card card={'asdf'} />
        <Card card={'asdf'} />
        <Card card={'asdf'} />
      </section>
    </main>
  );
}
