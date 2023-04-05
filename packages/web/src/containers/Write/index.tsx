import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '@/modules/user';
import { indexState } from '@/modules';

import styles from '@/styles/Write.module.css';

import Notiflix from 'notiflix';
import Header from '@/components/write/Header';

export default function WriteContainer() {
  const router = useRouter();

  const { isLogin } = useSelector((state: indexState) => ({
    isLogin: state.userData.isLogin,
  }));

  if (!isLogin) {
    Notiflix.Notify.failure('글쓰기를 하려면 로그인 해주세요!');
    router.push('/');
  }

  return (
    <>
      <Header />
      <h1>hi</h1>
    </>
  );
}

// WriteContainer.getInitialProps = async () => {
//   return { isLogin: true };
// };
