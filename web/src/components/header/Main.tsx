import Image from 'next/image';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { userState } from '@/modules/user';

const Main = () => {
  const { isLogin, user } = useSelector((state: userState) => ({
    isLogin: state.isLogin,
    user: state.user,
  }));
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Food</h1>
      <div className={styles.right}>
        <Image src="/search.svg" width={48} height={48} alt={'search'} />
        {isLogin ? (
          <Image src="/write.svg" width={48} height={48} alt={'search'} />
        ) : (
          <></>
        )}

        <Image src="/profile.svg" width={48} height={48} alt={'search'} />
      </div>
    </div>
  );
};
export default Main;
