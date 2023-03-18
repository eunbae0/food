import axios, { AxiosError } from 'axios';

import { API_URL } from '@/constants/urls';

const tokenAPI = axios.create({
  baseURL: API_URL,
  validateStatus: () => true,
});

export default tokenAPI;
