export type UserData = {
  id: number;
  username: string;
  email: string;
  provider: 'local' | '';
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  nickname: string;
};

export type LoginParams = {
  identifier: string;
  password: string;
};

export type LoginResponse = {
  jwt: string;
  user: UserData;
};

export type RefreshTokenParams = {
  refreshToken: string;
};

export type RefreshTokenResponse = {
  jwt: string;
  refreshToken: string;
};
