import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import styles from './MainHeader.module.css';
import { userState } from '@/modules/user';
import Modal from '@/components/common/modal/Modal';
import { authAPI } from '@/api';
import tokenAPI from '@/api/core/tokenAPI';

import Header from '@/components/common/header';

const MainHeader = () => {
  const { isLogin, user } = useSelector((state: userState) => ({
    isLogin: state.isLogin,
    user: state.user,
  }));
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onClickMypage = () => {};
  const onClickLogout = () => {
    localStorage.removeItem('token');
    tokenAPI.interceptors.request.use((config) => {
      config.withCredentials = false;
      // config.headers.clear;
      return config;
    });
    //redux 상태제거
    authAPI.refreshToken({ refreshToken: '' });
  };
  return (
    <Header>
      <h1 className={styles.h1}>Food</h1>
      <div className={styles.right}>
        <Image src="/search.svg" width={48} height={48} alt={'search'} />
        {isLogin ? (
          <Image src="/write.svg" width={48} height={48} alt={'search'} />
        ) : (
          <></>
        )}

        <Image
          src="/profile.svg"
          width={48}
          height={48}
          alt={'search'}
          onClick={() => setIsModalOpen((prev) => !prev)}
        />
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
