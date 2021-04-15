import { Cell } from './Cell';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import Avatar from '../Avatar/Avatar';

describe('Cell', () => {
  describeScreenshotFuzz(Cell, [{
    selectable: [true],
    before: [<Avatar key="avatar" />],
    children: ['Мария Саломея Склодовская-Кюри', 'Михаил Лихачев'],
    $adaptivity: 'y',
    checked: [true, false],
    disabled: [true, false],
    multiline: [true, false],
  },
  {
    removable: [true],
    $adaptivity: 'y',
    children: ['Мария Саломея Склодовская-Кюри', 'Евгения Полозова'],
    multiline: [true, false],
  },
  {
    draggable: [true],
    $adaptivity: 'y',
    children: ['Мария Саломея Склодовская-Кюри', 'Артур Стамбульцян'],
    multiline: [true, false],
  }]);
});
