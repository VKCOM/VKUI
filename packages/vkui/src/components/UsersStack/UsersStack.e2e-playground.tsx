import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { UsersStack, type UsersStackProps } from './UsersStack';

const base64Image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+' +
  '0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2' +
  'xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY' +
  'gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA' +
  'SUVORK5CYII=';

const oneImage = withLabel([base64Image], 'One image');
const twoImage = withLabel([base64Image, base64Image], 'Two image');
const threeImage = withLabel([base64Image, base64Image, base64Image], 'Three image');
const fourImage = withLabel([base64Image, base64Image, base64Image, base64Image], 'Four image');

export const UsersStackPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: ['Понравилось Анне и ещё XX людям'],
          size: ['s', 'm', 'l'],
          avatarsPosition: ['inline-start', 'block-start', 'inline-end'],
          photos: [oneImage, twoImage, threeImage, fourImage],
        },
        // при пустом children отсутствуют отступы
        {
          children: [undefined],
          avatarsPosition: ['inline-start', 'block-start', 'inline-end'],
          photos: [threeImage],
        },
        {
          dir: ['rtl'],
          children: ['Понравилось Анне и ещё XX людям'],
          size: ['s', 'm', 'l'],
          photos: [threeImage, fourImage],
        },
        {
          children: [undefined],
          size: ['m', 'l'],
          photos: [threeImage],
          count: [99],
        },
      ]}
    >
      {(props: UsersStackProps) => <UsersStack {...props} />}
    </ComponentPlayground>
  );
};
