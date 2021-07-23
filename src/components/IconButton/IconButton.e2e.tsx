import { Icon16MoreVertical, Icon16MessageHeart, Icon24MessageOutline, Icon28MessageOutline } from '@vkontakte/icons';
import IconButton, { IconButtonProps } from './IconButton';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('IconButton', () => {
  describeScreenshotFuzz((props: IconButtonProps ) => (<IconButton style={{ backgroundColor: 'var(--background_highlighted)' }} {...props} />), [
    {
      children: [
        <Icon28MessageOutline key="icon-w28" />,
        <Icon24MessageOutline key="icon-w24" />,
        <Icon16MessageHeart key="icon-w16" />,
        <Icon16MoreVertical key="icon-w08" />,
      ],
      $adaptivity: 'y',
    },
  ]);
});
