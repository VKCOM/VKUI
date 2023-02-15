/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { Icon20ArticleOutline, Icon20PlaceOutline, Icon20WorkOutline } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Avatar } from '../Avatar/Avatar';
import { Link } from '../Link/Link';
import { MiniInfoCell } from './MiniInfoCell';

describe('MiniInfoCell', () => {
  describeScreenshotFuzz(MiniInfoCell, [
    {
      before: [<Icon20PlaceOutline key="icon" />],
      mode: ['accent', undefined],
      children: ['Санкт-Петербург, Россия'],
    },
    {
      before: [<Icon20WorkOutline key="icon" />],
      children: [
        <Link key="link" href="https://vk.com/team">
          vk.com/team
        </Link>,
      ],
      expandable: [true],
    },
    {
      before: [<Icon20ArticleOutline key="icon" />],
      textWrap: ['nowrap', 'short', 'full'],
      children: [
        'ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей.',
      ],
    },
    {
      before: [<Icon20WorkOutline key="icon" />],
      after: [<Avatar size={24} key="after"></Avatar>],
      children: ['Место работы: Команда ВКонтакте'],
    },
    {
      before: [<Icon20WorkOutline key="icon" />],
      mode: ['add'],
      onClick: [
        () => {
          console.log('hi');
        },
      ],
      children: ['Укажите место учёбы или работы'],
    },
    {
      before: [<Icon20WorkOutline key="icon" />],
      mode: ['more'],
      onClick: [
        () => {
          console.log('hi');
        },
      ],
      children: ['Подробная информация'],
    },
    {
      before: [<Icon20WorkOutline key="icon" />],
      mode: ['more'],
      textWrap: ['short'],
      children: ['Подробная информация'],
      expandable: [true],
    },
  ]);
});
