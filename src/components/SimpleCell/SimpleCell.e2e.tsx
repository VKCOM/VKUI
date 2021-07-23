import { Icon16MoreVertical, Icon16MessageHeart, Icon24MessageOutline, Icon28MessageOutline } from '@vkontakte/icons';
import SimpleCell, { SimpleCellProps } from './SimpleCell';
import Avatar from '../Avatar/Avatar';
import IconButton from '../IconButton/IconButton';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('SimpleCell', () => {
  describeScreenshotFuzz((props: SimpleCellProps ) => (<SimpleCell {...props} />), [
    {
      before: [<Avatar key="avatar" size={40} />],
      children: ['Artur Stambultsian'],
      after: [
        <IconButton key="icon-w28"><Icon28MessageOutline /></IconButton>,
        <IconButton key="icon-w24"><Icon24MessageOutline /></IconButton>,
        <IconButton key="icon-w16"><Icon16MessageHeart /></IconButton>,
        <IconButton key="icon-w08"><Icon16MoreVertical /></IconButton>,
      ],
    },
  ]);
});
