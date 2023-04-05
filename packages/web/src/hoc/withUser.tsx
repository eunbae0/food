import useUser from '@/hooks/useUser';

type ComponentType = (props?: any) => JSX.Element;

export const withUser = (WrappedComponent: ComponentType) => {
  const Component = ({ ...props }) => {
    useUser();
    return <WrappedComponent {...props} />;
  };

  return Component;
};
