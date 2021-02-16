import { Checkbox, CheckboxProps } from './Checkbox';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('Checkbox', () => {
  describeScreenshotFuzz((props: CheckboxProps) => <Checkbox {...props}>label</Checkbox>, [{
    checked: [false, true],
    disabled: [undefined, true],
  }], {});
});
