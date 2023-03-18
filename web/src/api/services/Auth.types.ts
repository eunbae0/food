import * as Type from '@/api/types/auth.types';
import { ServiceFunc } from './types';

type AuthService = {
  login: (params: Type.LoginParams) => Promise<void>;

  refreshToken: ServiceFunc<Type.RefreshTokenParams>;
  // loginCallback: ServiceFunc<Type.LoginCallbackParams>;

  // withdraw: ServiceFunc;
};

export default AuthService;
