import { GetServerSidePropsContext } from 'next/types';

import PostContainer from '@/containers/Post';
import { withUser } from '@/hoc/withUser';

import { postAPI } from '@/api';
import { PostData } from '@/api/types/post.types';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = parseInt(context.query.slug as string);
  const { data } = await postAPI.getPost(id);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data.data },
  };
}

function Post({ data }: { data: PostData }) {
  return <PostContainer data={data} />;
}

export default withUser(Post);
