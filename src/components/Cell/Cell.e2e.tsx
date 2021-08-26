import { Cell } from './Cell';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import Avatar from '../Avatar/Avatar';

describe('Cell', () => {
  describeScreenshotFuzz(Cell, [{
    selectable: [true],
    before: [<Avatar key="avatar" />],
    children: ['Мария Саломея Склодовская-Кюри'],
    checked: [true, false],
    disabled: [true, false],
  }, {
    removable: [true],
    before: [<Avatar key="avatar" />],
    children: ['Мария Саломея Склодовская-Кюри'],
  }, {
    draggable: [true],
    before: [<Avatar key="avatar" />],
    children: ['Мария Саломея Склодовская-Кюри'],
  }, {
    selectable: [undefined, true],
    draggable: [undefined, true],
    children: ['Мария Саломея Склодовская-Кюри'],
    multiline: [true, false],
    $adaptivity: 'y',
  }]);
});
