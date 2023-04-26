import * as Type from '@/api/types/post.types';
import { ServiceFunc } from './types';

type AuthService = {
  post: ServiceFunc<Type.PostParams>;

  getPosts: ServiceFunc;

  getPost: ServiceFunc<Type.getPostParams>;
};

export default AuthService;
