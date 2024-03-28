import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Skeleton, type SkeletonProps } from './Skeleton';

export const SkeletonPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          width: [100],
          height: [16],
          colorFrom: [undefined, 'red'],
        },
        {
          width: [16],
          height: [16],
          circle: [undefined, true],
        },
        {
          width: [50],
          height: [50],
          children: [<Skeleton key="skeleton" width={16} height={16} style={{ margin: 16 }} />],
        },
      ]}
    >
      {(props: SkeletonProps) => <Skeleton {...props} />}
    </ComponentPlayground>
  );
};
