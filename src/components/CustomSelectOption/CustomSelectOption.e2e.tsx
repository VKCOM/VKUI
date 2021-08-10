import CustomSelectOption from './CustomSelectOption';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import Avatar from '../Avatar/Avatar';

describe('CustomSelectOption', () => {
  describeScreenshotFuzz(CustomSelectOption, [{
    selected: [true],
    before: [<Avatar size={20} key="avatar" />],
    $adaptivity: 'y',
    children: ['Мария Саломея Склодовская-Кюри Мария Саломея Склодовская-Кюри', 'Мария Саломея'],
    after: [undefined, 'Hello'],
  }, {
    children: ['Мария Саломея'],
    $adaptivity: 'y',
    hovered: [true],
  }]);
});
