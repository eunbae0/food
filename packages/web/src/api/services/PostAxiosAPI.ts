import API from '@/api/core';
import tokenAPI from '@/api/core/tokenAPI';
import loginAPI from '@/api/core/loginAPI';

import PostService from './Post.types';
import * as Type from '@/api/types/post.types';

export default class PostAxiosAPI implements PostService {
  post(params: Type.PostParams) {
    return tokenAPI.post<Type.PostResponse>(`/api/posts`, params);
  }
}
