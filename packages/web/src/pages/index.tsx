import MainContainer from '@/containers/Main';
import { withUser } from '@/hoc/withUser';

import { postAPI } from '@/api';
import { PostDataArray } from '@/api/types/post.types';

export async function getServerSideProps() {
  const { data } = await postAPI.getPosts();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data.data },
  };
}

function Main({ data }: { data: PostDataArray }) {
  return <MainContainer data={data} />;
}

export default withUser(Main);
