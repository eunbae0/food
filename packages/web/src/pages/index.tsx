import MainContainer from '@/containers/Main';
import { withUser } from '@/hoc/withUser';

function Main() {
  return <MainContainer />;
}

export default withUser(Main);
