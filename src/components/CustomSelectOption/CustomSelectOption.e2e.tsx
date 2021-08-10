import CustomSelectOption from './CustomSelectOption';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import Avatar from '../Avatar/Avatar';
import { SizeType } from '../../hoc/withAdaptivity';

describe('CustomSelectOption', () => {
  const propsSets = [{
    selected: [true],
    before: [<Avatar size={20} key="avatar" />],
    children: ['Мария Саломея Склодовская-Кюри Мария Саломея Склодовская-Кюри', 'Мария Саломея'],
    after: [undefined, 'Hello'],
  }, {
    children: ['Мария Саломея'],
    hovered: [true],
  }];

  describeScreenshotFuzz(CustomSelectOption, propsSets, { adaptivity: { sizeY: SizeType.COMPACT } });
  describeScreenshotFuzz(CustomSelectOption, propsSets, { adaptivity: { sizeY: SizeType.REGULAR } });
});
