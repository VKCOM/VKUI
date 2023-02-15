/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { SizeType } from '../../lib/adaptivity';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Avatar } from '../Avatar/Avatar';
import { CustomSelectOption } from './CustomSelectOption';

describe('CustomSelectOption', () => {
  describeScreenshotFuzz(
    CustomSelectOption,
    [
      {
        selected: [true],
        before: [<Avatar size={20} key="avatar" />],
        children: [
          'Мария Саломея Склодовская-Кюри Мария Саломея Склодовская-Кюри',
          'Мария Саломея',
        ],
        after: [undefined, 'Hello'],
      },
      {
        children: ['Мария Саломея'],
        hovered: [true],
      },
      {
        children: ['Мария Саломея'],
        description: ['город Санкт-Петербург, Ленинградская область, Россия'],
      },
      {
        children: ['Мария Саломея'],
        disabled: [true],
        hovered: [true, false],
      },
      {
        children: ['Иерархия'],
        hierarchy: [undefined, 1, 2],
      },
    ],
    {
      adaptivity: { sizeY: SizeType.REGULAR },
    },
  );
});
