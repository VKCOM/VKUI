import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { EllipsisText, EllipsisTextProps } from './EllipsisText';

export const EllipsisTextPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          maxWidth: [undefined, 100, 150],
        },
      ]}
    >
      {(props: EllipsisTextProps) => (
        <div style={{ width: 200, padding: 20 }}>
          <EllipsisText {...props}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </EllipsisText>
        </div>
      )}
    </ComponentPlayground>
  );
};
