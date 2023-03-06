import { describeScreenshotFuzz } from '../../testing/e2e';
import { UsersStack } from './UsersStack';

const base64Image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+' +
  '0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2' +
  'xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY' +
  'gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA' +
  'SUVORK5CYII=';

describe('UsersStack', () => {
  describeScreenshotFuzz(UsersStack, [
    {
      children: ['Понравилось Анне и ещё XX людям'],
      size: ['s', 'm', 'l'],
      layout: ['horizontal', 'vertical'],
      photos: [
        [base64Image],
        [base64Image, base64Image],
        [base64Image, base64Image, base64Image],
        [base64Image, base64Image, base64Image, base64Image],
      ],
    },
    // при пустом children отсутствуют отступы
    {
      children: [undefined],
      layout: ['horizontal', 'vertical'],
      photos: [[base64Image, base64Image, base64Image]],
    },
  ]);
});
