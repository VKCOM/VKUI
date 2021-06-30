import { Icon16Add, Icon24Camera } from '@vkontakte/icons';
import Button, { ButtonProps } from './Button';
import Counter from '../Counter/Counter';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('Button', () => {
  describeScreenshotFuzz((props: ButtonProps) => <Button {...props}>Кнопка</Button>, [{
    mode: [
      'primary', 'secondary', 'tertiary',
      'outline', 'commerce', 'destructive',
      'overlay_primary', 'overlay_secondary', 'overlay_outline',
    ],
    disabled: [undefined, true],
  }, {
    size: ['s', 'm', 'l'],
    $adaptivity: 'y',
  }, {
    mode: ['primary'],
    before: [<Icon16Add key="icon-16" />],
    $adaptivity: 'y',
  }, {
    mode: ['outline'],
    before: [<Icon16Add key="icon-16" />],
  }, {
    mode: ['primary'],
    before: [undefined, <Icon24Camera key="icon-24" />],
    after: [<Counter key="counter">16</Counter>],
    size: ['l'],
    $adaptivity: 'y',
  }, {
    mode: ['outline'],
    before: [undefined, <Icon24Camera key="icon-24" />],
    after: [<Counter key="counter">16</Counter>],
    size: ['l'],
  }]);
});
