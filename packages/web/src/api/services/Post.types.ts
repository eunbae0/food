import * as Type from '@/api/types/post.types';
import { ServiceFunc } from './types';

type AuthService = {
  post: ServiceFunc<Type.PostParams>;
};

export default AuthService;
