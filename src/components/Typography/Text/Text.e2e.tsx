import { describeScreenshotFuzz } from '../../../testing/e2e/utils';
import Text, { TextProps } from './Text';

describe('Text', () => {
  describeScreenshotFuzz((props: TextProps) => <Text {...props} style={{ marginBottom: 16 }}>Text {props.weight}</Text>, [{
    weight: ['regular', 'medium', 'semibold'],
  }]);
});
