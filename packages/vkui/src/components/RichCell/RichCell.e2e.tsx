/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { Icon24UserAddOutline } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { UsersStack } from '../UsersStack/UsersStack';
import { RichCell } from './RichCell';

describe('RichCell', () => {
  describeScreenshotFuzz(RichCell, [
    {
      before: [<Avatar size={72} key="72" />],
      subhead: ['Subhead subhead subhead subhead'],
      children: ['Children children children children'],
      text: ['Text text text text text text'],
      caption: ['Caption caption caption caption'],
      after: ['After'],
      afterCaption: ['After Caption'],
      bottom: [
        <UsersStack key="stack" photos={['', '', '']}>
          N общих друга
        </UsersStack>,
      ],
      actions: [
        <ButtonGroup key="actions" gap="s" stretched>
          <Button>Primary</Button>
          <Button mode="secondary">Secondary</Button>
        </ButtonGroup>,
      ],
      $adaptivity: 'y',
    },
    {
      before: [<Avatar size={72} key="72" />],
      subhead: ['Subhead subhead subhead subhead'],
      children: ['Children children children children'],
      text: ['Text text text text text text'],
      caption: ['Caption caption caption caption'],
      after: ['After'],
      afterCaption: ['After Caption'],
      bottom: [
        <UsersStack key="stack" photos={['', '', '']}>
          N общих друга
        </UsersStack>,
      ],
      actions: [
        <ButtonGroup key="actions" gap="s" stretched>
          <Button>Primary</Button>
          <Button mode="secondary">Secondary</Button>
        </ButtonGroup>,
      ],
      multiline: [true],
    },
    {
      before: [<Avatar size={48} key="48" />],
      children: ['Михаил Лихачев'],
      caption: ['Команда ВКонтакте, Санкт-Петербург'],
      after: [<Icon24UserAddOutline key="icon" />],
    },
  ]);
});
