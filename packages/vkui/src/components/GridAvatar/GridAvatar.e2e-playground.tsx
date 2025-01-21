import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { IconExampleForBadgeBasedOnImageBaseSize } from '../../testing/icons';
import { GridAvatar, type GridAvatarProps } from './GridAvatar';

const base64Image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+' +
  '0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2' +
  'xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY' +
  'gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA' +
  'SUVORK5CYII=';

const oneImage = withLabel([base64Image], '1 image');
const twoImage = withLabel([base64Image, base64Image], '2 images');
const threeImage = withLabel([base64Image], '3 images');
const fourImage = withLabel([base64Image], '4 images');

export const GridAvatarPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: [96, 28],
          src: [[], oneImage, twoImage, threeImage, fourImage],
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
