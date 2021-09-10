import { Icon16Add } from '@vkontakte/icons';
import Avatar, { AvatarProps } from './Avatar';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

const image = `data:image/jpeg;base64,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\n`;

describe('Avatar', () => {
  describeScreenshotFuzz((props: AvatarProps ) => (<Avatar {...props} />), [
    {
      mode: ['default', 'app', 'image'],
    },
    {
      src: [image],
    },
    {
      style: [{ backgroundImage: `url(${image})` }],
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
  ]);
});
