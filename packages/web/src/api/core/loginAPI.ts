import axios, { AxiosError } from 'axios';

import { API_URL } from '@/constants/urls';

const loginAPI = axios.create({
  baseURL: API_URL,
});

export default loginAPI;
