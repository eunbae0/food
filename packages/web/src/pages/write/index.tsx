import WriteContainer from '@/containers/Write';
import { withUser } from '@/hoc/withUser';

function Write() {
  return <WriteContainer />;
}

export default withUser(Write);
