import { Icon16Add } from '@vkontakte/icons';
import Avatar, { AvatarProps } from './Avatar';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

const base64Image = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+
0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2xpH
I9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWI
FYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAASUVORK5CY
II=`;

describe('Avatar', () => {
  describeScreenshotFuzz((props: AvatarProps ) => (<Avatar {...props} />), [
    {
      mode: ['default', 'app', 'image'],
    },
    {
      size: [72],
      shadow: [undefined, false],
    },
    {
      style: [{ background: 'var(--accent)' }],
      size: [28],
      shadow: [false],
      children: [<Icon16Add key="icon-add" fill="var(--white)" />],
    },
    {
      src: [base64Image],
    },
    {
      style: [{ backgroundImage: `url('${base64Image}')` }],
    },
  ]);
});
