import React, { FC, PropsWithChildren } from 'react';
import withAdaptivity, { SizeType } from '../../hoc/withAdaptivity';
import classNames from '../../lib/classNames';
import { AdaptivityProviderProps } from '../AdaptivityProvider/AdaptivityProvider';

export type AppRootProps = AdaptivityProviderProps;

const AppRoot: FC<PropsWithChildren<AppRootProps>> = ({ sizeX, children }: PropsWithChildren<AppRootProps>) => {
  return (
    <div className={classNames('AppRoot', {
      'AppRoot-sizeX-regular': sizeX === SizeType.REGULAR,
    })}>
      {children}
    </div>
  );
};

export default withAdaptivity(AppRoot, {
  sizeX: true,
});
