import AuthContainer from '@/containers/Auth';
import { withUser } from '@/hoc/withUser';

function Auth() {
  return <AuthContainer />;
}

export default withUser(Auth);
