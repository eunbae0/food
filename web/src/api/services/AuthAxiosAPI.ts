import API from '@/api/core';

import AuthService from './Auth.types';
import * as Type from '@/api/types/auth.types';

export default class AuthAxiosAPI implements AuthService {
  login() {
    return API.get(`/api/auth/local`);
  }

  // loginCallback(params: Type.GoogleLoginCallbackParams) {
  //   return API.post<Type.GoogleLoginCallbackResponse>(
  //     `/api/login/callback/google?code=${params.code}`,
  //   )
  // }

  // withdraw() {
  //   return API.delete(`/api/user`);
  // }
}
