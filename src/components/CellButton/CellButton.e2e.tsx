import * as React from 'react';
import { Icon24Add, Icon28AddOutline } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { CellButton } from './CellButton';
import { Avatar } from '../Avatar/Avatar';
import { Image } from '../Image/Image';

describe('CellButton', () => {
  describeScreenshotFuzz(CellButton, [
    {
      centered: [true],
      children: ['Создать что-нибудь'],
    },
    {
      mode: [undefined, 'danger'],
      children: ['Создать что-нибудь'],
    },
    {
      mode: [undefined, 'danger'],
      before: [<Icon28AddOutline key="icon" />],
      children: ['Создать что-нибудь'],
    },
    {
      before: [
        <Avatar key={40} size={40}>
          <Icon24Add />
        </Avatar>,
        <Avatar key={48} size={48}>
          <Icon28AddOutline />
        </Avatar>,
        <Image key={72} size={72}>
          <Icon28AddOutline />
        </Image>,
      ],
      children: ['Создать что-нибудь'],
    },
  ]);
});
