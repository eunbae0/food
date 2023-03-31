import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import styles from './MainHeader.module.css';
import { deleteUser } from '@/modules/user';
import Modal from '@/components/common/modal/Modal';
import { authAPI } from '@/api';
import tokenAPI from '@/api/core/tokenAPI';

import Header from '@/components/common/header';
import Button from '@/components/common/button/Button';
import Notiflix from 'notiflix';
import { useRouter } from 'next/router';
import { indexState } from '@/modules';

const MainHeader = () => {
  const { isLogin, user } = useSelector((state: indexState) => ({
    isLogin: state.userData.isLogin,
    user: state.userData.user,
  }));
  const dispatch = useDispatch();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const modalRef = useRef<HTMLDivElement>(null);
  // const modalOutSideClick = (e: React.MouseEvent) => {
  //   console.log(e.target);
  //   if (modalRef.current === e.target) {
  //     setIsModalOpen(false);
  //   }
  // };

  const onClickMypage = () => {};

  const onClickLogout = async () => {
    localStorage.removeItem('token');
    tokenAPI.interceptors.request.use((config) => {
      config.withCredentials = false;
      // config.headers.clear;
      return config;
    });
    try {
      await authAPI.refreshToken({ refreshToken: '' });
      dispatch(deleteUser()); //redux 상태제거
      Notiflix.Notify.success('로그아웃 되었습니다');
      setIsModalOpen(false);
      router.push('/');
      // location.reload();
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
            // ref={modalRef}
            list={[
              { label: '마이페이지', onClick: onClickMypage },
              { label: '로그아웃', onClick: onClickLogout },
            ]}
            // modalOutSideClick={modalOutSideClick}
          />
        )}
      </div>
    </Header>
  );
};
export default MainHeader;
