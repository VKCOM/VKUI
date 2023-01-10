import * as React from 'react';
import { Cell } from './Cell';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { Avatar } from '../Avatar/Avatar';

describe('Cell', () => {
  describeScreenshotFuzz(Cell, [
    {
      mode: ['selectable'],
      before: [<Avatar key="avatar" />],
      children: ['Мария Саломея Склодовская-Кюри', 'Михаил Лихачев'],
      $adaptivity: 'y',
      checked: [true, false],
      disabled: [true, false],
      multiline: [true, false],
    },
    {
      mode: ['removable'],
      $adaptivity: 'y',
      children: ['Мария Саломея Склодовская-Кюри', 'Евгения Полозова'],
      multiline: [true, false],
    },
    {
      draggable: [true],
      $adaptivity: 'y',
      children: ['Мария Саломея Склодовская-Кюри', 'Артур Стамбульцян'],
      multiline: [true, false],
    },
  ]);
});
