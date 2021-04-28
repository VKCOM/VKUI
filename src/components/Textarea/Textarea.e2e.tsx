import Textarea, { TextareaProps } from './Textarea';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('Textarea', () => {
  describeScreenshotFuzz((props: TextareaProps) => <Textarea {...props} />, [{
    disabled: [undefined, true],
  }, {
    $adaptivity: 'y',
  }]);
});
