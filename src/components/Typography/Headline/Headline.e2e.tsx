import { describeScreenshotFuzz } from '../../../testing/e2e/utils';
import Headline, { HeadlineProps } from './Headline';

describe('Headline', () => {
  describeScreenshotFuzz((props: HeadlineProps) => <Headline {...props} style={{ marginBottom: 16 }}>Headline {props.weight}</Headline>, [{
    weight: ['regular', 'medium', 'semibold'],
  }]);
});
