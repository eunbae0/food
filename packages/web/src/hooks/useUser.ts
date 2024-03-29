import { authAPI } from '@/api';
import { setTokenInAxiosInstance } from '@/api/core';
import { persistor } from '@/modules';
import { deleteUser, loadingUser, updateUser } from '@/modules/user';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';

export default async function useUser() {
  const dispatch = useDispatch();
  setTokenInAxiosInstance();
  const { data, error, isLoading } = useSWR(
    typeof window === 'undefined' ? null : `/api/users/me`,
    authAPI.user,
  );
  dispatch(loadingUser(isLoading));
  if (data) {
    dispatch(updateUser(data.data));
  }

  if (error && localStorage.getItem('token') === 'undefined') {
    dispatch(deleteUser());
    await persistor.purge();
    console.error(error);
  } else if (error) console.error(error);

  // return {
  //   user: data,
  //   isLoading,
  //   isError: error,
  // };
}
