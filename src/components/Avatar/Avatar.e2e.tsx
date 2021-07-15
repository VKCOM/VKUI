import { Icon16Add } from '@vkontakte/icons';
import Avatar, { AvatarProps } from './Avatar';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

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
  ]);
});
