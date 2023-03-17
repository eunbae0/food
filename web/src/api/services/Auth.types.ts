import * as Type from '@/api/types/auth.types';
import { ServiceFunc } from './types';

type AuthService = {
  login: ServiceFunc<Type.LoginCallbackParams>;

  // loginCallback: ServiceFunc<Type.LoginCallbackParams>;

  // withdraw: ServiceFunc;
};

export default AuthService;
