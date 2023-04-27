import { useSelector } from 'react-redux';
import { indexState } from '@/modules';

import Header from '@/components/main/Header';
import Banner from '@/components/common/banner/Banner';
import Card from '@/components/common/card/Card';

import styles from '@/styles/Main.module.css';
import { PostDataArray } from '@/api/types/post.types';

export default function MainContainer({ data }: { data: PostDataArray }) {
  // const { isLogin, isLoading, user } = useSelector((state: indexState) => ({
  //   isLogin: state.userData.isLogin,
  //   isLoading: state.userData.isLoading,
  //   user: state.userData.user,
  // }));

  return (
    <main>
      <Header />
      <Banner />
      <section className={styles.cardWrapper}>
        {!!data && data.map((data) => <Card key={data.id} data={data} />)}
      </section>
    </main>
  );
}
