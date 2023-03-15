import Image from 'next/image';
import CardProps from './card.type';
import styles from './Card.module.css';

export const Header = ({ card }: CardProps) => (
  <article className={styles.wrapper}>
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Image
          src=""
          width={40}
          height={40}
          alt=""
          className={styles.profileImg}
        />
        <div className={styles.userWrapper}>
          <span className={styles.user}>User</span>
          <span className={styles.date}>2022.02.02</span>
        </div>
      </div>
      <div>
        <Image src="/more.svg" width={48} height={48} alt={'search'} />
      </div>
    </header>
    <Image src="" width={360} height={188} alt="" />
    <div className={styles.bottomWrapper}>
      <h2 className={styles.h2}>Title</h2>
      <p className={styles.p}>asfkjnqlekrjtlrsjgn;eaflmsdcxl</p>
    </div>
  </article>
);

export default Header;
