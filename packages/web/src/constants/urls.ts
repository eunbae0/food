// export const BASE_URL = process.env.NEXT_PUBLIC_APP_URL;
// export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const isDev = process.env.NODE_ENV === 'development';

export const API_URL = isDev
  ? 'http://localhost:3000'
  : 'http://127.0.0.1:1337';
