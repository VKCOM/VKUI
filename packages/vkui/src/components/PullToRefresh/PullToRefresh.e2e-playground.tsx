import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Platform } from '../../lib/platform';
import { Div } from '../Div/Div';
import { PullToRefresh, type PullToRefreshProps } from './PullToRefresh';

export const PullToRefreshPlayground = (
  props: ComponentPlaygroundProps & { paddingLeft?: string },
) => {
  const { paddingLeft, ...playgroundProps } = props;
  return (
    <ComponentPlayground {...playgroundProps} platform={Platform.VKCOM} propSets={[]}>
      {({ ...props }: PullToRefreshProps) => (
        <Div style={{ width: '300px', paddingLeft }}>
          <PullToRefresh {...props}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin lectus, a
            commodo sapien. Vivamus a urna leo. Integer iaculis dignissim urna, sit amet vestibulum
            diam bibendum a. Donec eu arcu ut augue porttitor faucibus. Vestibulum nec pretium
            tortor, sit amet congue nunc. Aenean ullamcorper ex sem, sed interdum quam consequat et.
            Vestibulum a ex non diam fringilla feugiat. Nunc eu tellus sed leo elementum cursus.
            Mauris blandit porta egestas. Curabitur eget justo elementum, malesuada lacus ut, congue
            mauris. Integer orci nisi, convallis vitae dapibus sit amet, molestie a risus. Aenean
            ultricies lacus eros, sit amet condimentum urna malesuada et. Sed quis dolor tempus orci
            fringilla volutpat in sed velit. Aenean aliquet bibendum pretium.
          </PullToRefresh>
        </Div>
      )}
    </ComponentPlayground>
  );
};
