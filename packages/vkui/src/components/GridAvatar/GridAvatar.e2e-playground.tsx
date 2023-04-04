import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { IconExampleForBadgeBasedOnImageBaseSize } from '../../testing/icons';
import { GridAvatar, type GridAvatarProps } from './GridAvatar';

const base64Image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+' +
  '0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2' +
  'xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY' +
  'gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA' +
  'SUVORK5CYII=';

export const GridAvatarPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: [96, 28],
          src: [
            [],
            [base64Image],
            [base64Image, base64Image],
            [base64Image, base64Image, base64Image],
            [base64Image, base64Image, base64Image, base64Image],
          ],
          children: [
            <GridAvatar.Badge key="badge">
              <IconExampleForBadgeBasedOnImageBaseSize />
            </GridAvatar.Badge>,
          ],
        },
      ]}
    >
      {(props: GridAvatarProps) => <GridAvatar {...props} />}
    </ComponentPlayground>
  );
};
