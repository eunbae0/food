import API from '@/api/core';
import tokenAPI from '@/api/core/tokenAPI';

import AuthService from './Auth.types';
import * as Type from '@/api/types/auth.types';

export default class AuthAxiosAPI implements AuthService {
  async login(params: Type.LoginParams) {
    const res = await API.post<Type.LoginResponse>(`/api/auth/local`, params);
    return localStorage.setItem('token', res.data.jwt);
  }

  refreshToken(params: Type.RefreshTokenParams) {
    return tokenAPI.post<Type.RefreshTokenResponse>(
      `/api/token/refresh`,
      params,
    );
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
