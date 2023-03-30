import { createStore, AnyAction, Store } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

import { UserData } from '@/api/types/auth.types';

const UPDATE = 'user/UPDATE';
const DELETE = 'user/DELETE';
const LOADING = 'user/LOADING';

export type userState = {
  user: UserData;
  isLoading: boolean;
  isLogin: boolean;
};

export const updateUser = (user: userState['user']) => ({ type: UPDATE, user });
export const deleteUser = () => ({ type: DELETE });
export const loadingUser = (isLoading: userState['isLoading']) => ({
  type: LOADING,
  isLoading,
});

const initialUser: userState = {
  user: {
    id: 0,
    username: '',
    email: '',
    provider: '',
    confirmed: false,
    blocked: false,
    createdAt: '',
    updatedAt: '',
    nickname: '',
  },
  isLoading: true,
  isLogin: false,
};

export default function user(
  state: userState = initialUser,
  action: AnyAction,
) {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case LOADING:
      return { ...state, isLoading: action.isLoading };
    case UPDATE:
      return { ...state, user: action.user, isLoading: false, isLogin: true };
    case DELETE:
      return { ...state, ...initialUser, isLoading: false };
    default:
      return state;
  }
}

// create a makeStore function
const makeStore = (context: Context) => createStore(user);

// export an assembled wrapper
export const wrapper = createWrapper<Store<userState>>(makeStore, {
  debug: true,
});
