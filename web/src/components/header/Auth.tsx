import Image from 'next/image';
import HeaderProps from './header.type';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

function AuthHeader({ user }: HeaderProps) {
  const router = useRouter();
  const onClickBackBtn = () => {
    router.back();
  };
  return (
    <div className={styles.wrapper}>
      <Image
        src="/back.svg"
        width={48}
        height={48}
        alt={'search'}
        onClick={onClickBackBtn}
      />
      <h1 className={styles.headerName}>Login</h1>
    </div>
  );
}

export default AuthHeader;
