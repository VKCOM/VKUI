import { OwnerAvatar, OwnerAvatarProps } from './OwnerAvatar';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+' +
  '0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2' +
  'xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY' +
  'gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA' +
  'SUVORK5CYII=';

describe('OwnerAvatar', () => {
  describeScreenshotFuzz((props: OwnerAvatarProps ) => (<OwnerAvatar {...props} />), [
    {
      mode: ['default'],
      src: [base64Image, new Array(2).fill(base64Image), new Array(3).fill(base64Image), new Array(4).fill(base64Image)],
      online: [false, true, 'mobile'],
    },
    {
      mode: ['text'],
      text: ['A', 'AA', 'AAA', 'AAAA'],
      size: [24, 64, 96, 88],
      gradientColor: [1, 3, 12 as 6],
    },
  ]);
});
