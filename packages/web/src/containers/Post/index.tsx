import { useSelector } from 'react-redux';
import { indexState } from '@/modules';

import Header from '@/components/main/Header';

import styles from '@/styles/Main.module.css';
import { PostData } from '@/api/types/post.types';

export default function PostContainer({ data }: { data: PostData }) {
  const { isLogin, isLoading, user } = useSelector((state: indexState) => ({
    isLogin: state.userData.isLogin,
    isLoading: state.userData.isLoading,
    user: state.userData.user,
  }));
  console.log(data);
  return (
    <main>
      <Header />
      <section className={styles.cardWrapper}></section>
    </main>
  );
}
