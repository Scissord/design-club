import { Suspense, memo, ComponentType } from 'react';
import { Loader } from '@ui';

export const CW = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = memo((props: P) => (
    <Suspense
      fallback={
        // <div className="flex items-center justify-center w-full h-screen">
        //   ...Loading
        // </div>
        <Loader/>
      }
    >
      <Component {...props} />
    </Suspense>
  ));

  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name})`;
  return WrappedComponent;
};
