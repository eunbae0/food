import { authAPI } from '@/api';
import Header from '@/components/auth/Header';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import { userState } from '@/modules/user';
import styles from '@/styles/Auth.module.css';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
export default function AuthContainer() {
  const router = useRouter();

  const { isLogin } = useSelector((state: userState) => ({
    isLogin: state.isLogin,
  }));

  if (isLogin) router.push('/');

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value as string;
    const password = passwordRef.current?.value as string;
    const isDev = process.env.NODE_ENV === 'development';

    const devLoginObj = {
      identifier: process.env.NEXT_PUBLIC_TEST_IDENTIFIER as string,
      password: process.env.NEXT_PUBLIC_TEST_PASSWORD as string,
    };

    if (!username || !password) return alert('정보를 모두 입력해주세요');
    try {
      const res = await authAPI.login(
        isDev
          ? devLoginObj
          : {
              identifier: username,
              password,
            },
      );
      await authAPI.refreshToken({ refreshToken: res.data.jwt });
      router.push('/');
    } catch (error: any) {
      console.error(error.response.status); //status 말고 그냥 출력
    }
  };

  return (
    <>
      <Header />
      <section className={styles.loginFormWrapper}>
        <h1 className={styles.h1}>로그인하여 다양한 요리 정보를 검색하세요!</h1>
        <form onSubmit={onSubmitLogin} className={styles.form}>
          <Input
            primary={false}
            isSearch={false}
            label="Username"
            type="text"
            ref={usernameRef}
          ></Input>
          <Input
            primary={false}
            isSearch={false}
            label="Password"
            type="password"
            ref={passwordRef}
          ></Input>
          <Button primary={false} label={'login'} type="submit" />
        </form>
        <div>
          <span>계정이 없으신가요?</span>
          <button className={styles.registerBtn}>회원가입하러 가기</button>
        </div>
      </section>
    </>
  );
}

AuthContainer.getInitialProps = async () => {
  return { isLogin: true };
};
