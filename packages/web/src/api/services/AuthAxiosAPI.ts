import API from '@/api/core';
import tokenAPI from '@/api/core/tokenAPI';
import loginAPI from '@/api/core/loginAPI';

import AuthService from './Auth.types';
import * as Type from '@/api/types/auth.types';

export default class AuthAxiosAPI implements AuthService {
  async login(params: Type.LoginParams) {
    const res = await loginAPI.post<Type.LoginResponse>(
      `/api/auth/local`,
      params,
    );
    localStorage.setItem('token', res.data.jwt);
    return res;
  }

  refreshToken(params: Type.RefreshTokenParams) {
    return tokenAPI.post<Type.RefreshTokenResponse>(
      `/api/token/refresh`,
      params,
    );
  }

  user() {
    return API.get<Type.UserData>('/api/users/me');
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
