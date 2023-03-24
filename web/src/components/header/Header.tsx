import { useSelector } from 'react-redux';
import { userState } from '@/modules/user';

import HeaderProps from './header.type';

import MainHeader from './Main';
import AuthHeader from './Auth';

const returnHeader = (header?: string) => {
  switch (header) {
    case '':
      return <MainHeader />;
    case '/auth':
      return <AuthHeader />;
    default:
      return <MainHeader />;
  }
};

export const Header = ({ header }: HeaderProps) => {
  const { isLoading } = useSelector((state: userState) => ({
    isLoading: state.isLoading,
  }));
  //isloading 로직 추가 필요
  return <header>{returnHeader(header)}</header>;
};

export default Header;
