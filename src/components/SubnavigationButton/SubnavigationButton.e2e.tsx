import { Icon24User } from '@vkontakte/icons';
import { SubnavigationButton } from './SubnavigationButton';
import Counter from '../Counter/Counter';
import { Badge } from '../Badge/Badge';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('SubnavigationButton', () => {
  describeScreenshotFuzz(SubnavigationButton, [{
    children: ['Друзья'],
    size: ['m', 'l'],
    textLevel: [1, 2, 3],
  }, {
    children: ['Друзья'],
    expandable: [undefined, true],
    before: [undefined, <Icon24User key="" />],
    after: [<Counter key="" size="s">3</Counter>, <Badge mode="prominent" key="" />],
  }]);
});
