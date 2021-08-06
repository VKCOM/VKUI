import CustomSelectOption from './CustomSelectOption';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import Avatar from '../Avatar/Avatar';

describe('CustomSelectOption', () => {
  describeScreenshotFuzz(CustomSelectOption, [{
    selected: [true, false],
    before: [undefined, <Avatar key="avatar" />],
    children: ['Мария Саломея Склодовская-Кюри'],
    $adaptivity: 'y',
    hovered: [true, false],
    after: [undefined, 'Hello'],
  }]);
});
