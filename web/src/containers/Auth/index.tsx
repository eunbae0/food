import { authAPI } from '@/api';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import styles from '@/styles/Auth.module.css';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

export default function AuthContainer() {
  const router = useRouter();
  const onSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authAPI.login({
        identifier: 'foobar',
        password: 'Test1234',
      });
      router.push('/');
    } catch (error: any) {
      console.error(error.response.status);
    }
  };

  return (
    <>
      <section className={styles.loginFormWrapper}>
        <h1 className={styles.h1}>로그인하여 다양한 요리 정보를 검색하세요!</h1>
        <form onSubmit={onSubmitLogin} className={styles.form}>
          <Input
            primary={false}
            isSearch={false}
            label="Username"
            type="text"
          ></Input>
          <Input
            primary={false}
            isSearch={false}
            label="Password"
            type="password"
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
