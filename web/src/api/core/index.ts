import axios, { AxiosError } from 'axios';

import { API_URL } from '@/constants/urls';
import { authAPI } from '..';

const RETRY_INTERVAL_TIME = 3000;

const API = axios.create({
  baseURL: API_URL,
  // withCredentials: true,
});

API.interceptors.response.use(
  (response) => response,
  async (error: AxiosError & { config: { retryCount: number } }) => {
    const Localtoken = localStorage.getItem('token');
    // 401 이외이거나, token이 localstorage에 없을 때
    if (error.response?.status !== 401 || Localtoken === 'undefined')
      return Promise.reject(error);
    // 401, accessToken 만료일때
    const retryCount = error.config.retryCount || 1;
    if (retryCount >= 3) {
      return Promise.reject(error);
    }

    const token = localStorage.getItem('token') as string;
    const { data } = await authAPI.refreshToken({
      refreshToken: token,
    });

    localStorage.setItem('token', data.jwt);
    error.config.retryCount = retryCount + 1;

    setTimeout(() => {
      return API.request(error.config);
    }, RETRY_INTERVAL_TIME * (retryCount - 1));
  },
);

export const setTokenInAxiosInstance = () => {
  API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default API;
