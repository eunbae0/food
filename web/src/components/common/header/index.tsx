import { useSelector } from 'react-redux';
import { userState } from '@/modules/user';

import styles from './Header.module.css';

export const Header = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useSelector((state: userState) => ({
    isLoading: state.isLoading,
  }));
  //isloading 로직 추가 필요
  return <header className={styles.wrapper}>{children}</header>;
};

export default Header;
