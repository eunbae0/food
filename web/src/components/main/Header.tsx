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

const MainHeader = () => {
  const { isLogin, user } = useSelector((state: userState) => ({
    isLogin: state.isLogin,
    user: state.user,
  }));
  const [isModalOpen, setIsModalOpen] = useState(true);

  const dispatch = useDispatch();
  const onClickMypage = () => {};
  const onClickLogout = () => {
    localStorage.removeItem('token');
    tokenAPI.interceptors.request.use((config) => {
      config.withCredentials = false;
      // config.headers.clear;
      return config;
    });
    //redux 상태제거
    dispatch(deleteUser());
    authAPI.refreshToken({ refreshToken: '' });
    alert('로그아웃 되었습니다');
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
