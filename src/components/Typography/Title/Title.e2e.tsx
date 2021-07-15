import { describeScreenshotFuzz } from '../../../testing/e2e/utils';
import Title, { TitleProps } from './Title';

describe('Title', () => {
  describeScreenshotFuzz((props: TitleProps) => <Title {...props} style={{ marginBottom: 16 }}>Title lvl{props.level} {props.weight}</Title>, [{
    level: ['1'],
    weight: ['semibold', 'bold', 'heavy'],
  }, {
    level: ['2'],
    weight: ['regular', 'semibold', 'heavy'],
  }, {
    level: ['3'],
    weight: ['regular', 'medium', 'semibold'],
  }]);
});
