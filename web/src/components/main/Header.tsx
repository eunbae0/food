import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import styles from './MainHeader.module.css';
import { deleteUser, userState } from '@/modules/user';
import Modal from '@/components/common/modal/Modal';
import { authAPI } from '@/api';
import tokenAPI from '@/api/core/tokenAPI';

import Header from '@/components/common/header';
import Button from '@/components/common/button/Button';
import Notiflix from 'notiflix';
import { useRouter } from 'next/router';

const MainHeader = () => {
  const { isLogin, user } = useSelector((state: userState) => ({
    isLogin: state.isLogin,
    user: state.user,
  }));
  const [isModalOpen, setIsModalOpen] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();
  const onClickMypage = () => {};
  const onClickLogout = async () => {
    localStorage.removeItem('token');
    tokenAPI.interceptors.request.use((config) => {
      config.withCredentials = false;
      // config.headers.clear;
      return config;
    });
    dispatch(deleteUser()); //redux 상태제거
    try {
      await authAPI.refreshToken({ refreshToken: '' });
      Notiflix.Notify.success('로그아웃 되었습니다');
      router.push('/');
    } catch (error) {
      Notiflix.Notify.failure('알수없는 문제가 발생했습니다');
    }
  };
  return (
    <Header>
      <h1 className={styles.h1}>Food</h1>
      <div className={styles.right}>
        <Button primary={false}>
          <Image src="/search.svg" width={48} height={48} alt={'search'} />
        </Button>
        {isLogin ? (
          <Button primary={false}>
            <Image src="/write.svg" width={48} height={48} alt={'search'} />
          </Button>
        ) : (
          <></>
        )}

        <Button primary={false}>
          <Image
            src="/profile.svg"
            width={48}
            height={48}
            alt={'search'}
            onClick={() => setIsModalOpen((prev) => !prev)}
          />
        </Button>
        {isModalOpen && (
          <Modal
            type="header"
            list={[
              { text: '마이페이지', onClick: onClickMypage },
              { text: '로그아웃', onClick: onClickLogout },
            ]}
          />
        )}
      </div>
    </Header>
  );
};
export default MainHeader;
