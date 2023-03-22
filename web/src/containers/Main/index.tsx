import Header from '@/components/header/Header';
import Card from '@/components/card/Card';
import styles from '@/styles/Main.module.css';

export default function MainContainer() {
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
