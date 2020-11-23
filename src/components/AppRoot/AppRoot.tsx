import React, { PropsWithChildren } from 'react';
import withAdaptivity, { SizeType, AdaptivityProps } from '../../hoc/withAdaptivity';
import classNames from '../../lib/classNames';

const AppRoot = ({ sizeX, children }: PropsWithChildren<AdaptivityProps>) => {
  return (
    <div className={classNames('vkui-root', {
      'vkui-sizeX-regular': sizeX === SizeType.REGULAR,
    })}>
      {children}
    </div>
  );
};

export default withAdaptivity(AppRoot, {
  sizeX: true,
});
