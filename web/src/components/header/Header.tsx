import Image from 'next/image';
import HeaderProps from './header.type';
import styles from './Header.module.css';

import MainHeader from './Main';
import AuthHeader from './Auth';

const returnHeader = (user: boolean, header?: string) => {
  switch (header) {
    case '':
      return <MainHeader user={user} />;
    case '/auth':
      return <AuthHeader user={user} />;
    default:
      return <MainHeader user={user} />;
  }
};

export const Header = ({ user, header }: HeaderProps) => (
  <header>{returnHeader(user, header)}</header>
);

export default Header;
