import Image from 'next/image';
import HeaderProps from './header.type';
import styles from './Header.module.css';

const Main = ({ user }: HeaderProps) => (
  <div className={styles.wrapper}>
    <h1 className={styles.h1}>Food</h1>
    <div className={styles.right}>
      <Image src="/search.svg" width={48} height={48} alt={'search'} />
      {user ? (
        <Image src="/write.svg" width={48} height={48} alt={'search'} />
      ) : (
        <></>
      )}

      <Image src="/profile.svg" width={48} height={48} alt={'search'} />
    </div>
  </div>
);
export default Main;
