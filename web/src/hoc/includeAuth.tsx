import { setTokenInAxiosInstance } from '@/api/core';

type WrappedComponentProps = {
  token?: string;
};

type ComponentType = (props?: any) => JSX.Element;
export const withAuth = (WrappedComponent: ComponentType) => {
  const Component = ({ token, ...props }: WrappedComponentProps) => {
    if (token) {
      setTokenInAxiosInstance();
    }
    return <WrappedComponent {...props} />;
  };

  return Component;
};
