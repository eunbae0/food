import { useSelector } from 'react-redux';
import { indexState } from '@/modules';

import styles from './Header.module.css';

export const Header = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useSelector((state: indexState) => ({
    isLoading: state.userData.isLoading,
  }));
  //isloading 로직 추가 필요
  return <header className={styles.wrapper}>{children}</header>;
};

export default Header;
