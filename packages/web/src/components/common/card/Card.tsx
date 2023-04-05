import Image from 'next/image';
import CardProps from './card.type';
import styles from './Card.module.css';
import { authAPI } from '@/api';

import Button from '@/components/common/button/Button';

export const Header = ({ card }: CardProps) => {
  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Button primary={false}>
            <Image
              src=""
              width={40}
              height={40}
              alt=""
              className={styles.profileImg}
            />
          </Button>
          <div className={styles.userWrapper}>
            <span className={styles.user}>User</span>
            <span className={styles.date}>2022.02.02</span>
          </div>
        </div>
        <div>
          <Button primary={false}>
            <Image src="/more.svg" width={48} height={48} alt={'search'} />
          </Button>
        </div>
      </header>
      <section
        className={styles.section}
        onClick={/*해당 글로 이동 로직*/ () => {}}
      >
        <Image src="" width={360} height={188} alt="" />
        <div className={styles.bottomWrapper}>
          <h2 className={styles.h2}>Title</h2>
          <p className={styles.p}>asfkjnqlekrjtlrsjgn;eaflmsdcxl</p>
        </div>
      </section>
    </article>
  );
};

export default Header;
