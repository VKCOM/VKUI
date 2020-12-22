import { Icon24Add } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import Counter from '../Counter/Counter';
import Link from '../Link/Link';
import Header, { HeaderProps } from './Header';

describe('Header', () => {
  describeScreenshotFuzz((props: HeaderProps) => <Header {...props}>Заголовок</Header>, [{
    mode: ['primary', 'secondary', 'tertiary'],
    indicator: ['Индикатор'],
    subtitle: ['Поздаголовок'],
    aside: ['Текст'],
  }, {
    children: ['Заголовок'],
  }, {
    indicator: ['Индикатор', <Counter key="" size="s" mode="prominent">3</Counter>],
  }, {
    subtitle: ['Поздаголовок'],
  }, {
    aside: ['Текст', <Link key="">Ссылка</Link>, <Icon24Add key="" />],
  }]);
});
