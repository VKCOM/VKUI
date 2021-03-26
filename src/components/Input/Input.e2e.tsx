import Input, { InputProps } from './Input';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('Input', () => {
  describeScreenshotFuzz((props: InputProps) => <Input value="Иванов" {...props} />, [{
    align: [undefined, 'center', 'right'],
    disabled: [undefined, true],
  }, {
    $adaptivity: 'y',
  }]);
});
