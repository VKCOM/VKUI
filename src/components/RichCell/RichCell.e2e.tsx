import { Icon28UserAddOutline } from '@vkontakte/icons';
import { Fragment } from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import UsersStack from '../UsersStack/UsersStack';
import RichCell from './RichCell';

describe('RichCell', () => {
  describeScreenshotFuzz(RichCell, [
    {
      before: [<Avatar size={72} key="avatar" />],
      children: ['Тарас Иванов'],
      disabled: [true],
      caption: ['Вчера в 20:30'],
      after: ['1500 руб.', <Icon28UserAddOutline key="icon" />],
      bottom: [<UsersStack key="stack" photos={['', '', '']}>73 общих друга</UsersStack>],
      actions: [
        <Fragment key="actions">
          <Button>Окей</Button>
          <Button mode="secondary">Отменить</Button>
        </Fragment>,
      ],
      $adaptivity: 'y',
    },
    {
      before: [<Avatar size={48} key="avatar" />],
      children: ['Михаил Лихачев'],
      disabled: [false],
      multiline: [true, false],
      text: [undefined, 'Возврат по договору займа за поездку в Лиссабон'],
      caption: ['Команда ВКонтакте, Санкт-Петербург'],
      after: ['- 700 руб.'],
    },
  ]);
});
