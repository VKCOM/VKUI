import ChipsInput, { ChipsInputProps } from './ChipsInput';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('ChipsInput', () => {
  describeScreenshotFuzz((props: ChipsInputProps<any>) => (<ChipsInput {...props} placeholder="Введите название и нажмите Enter" />), [{
    value: [undefined, [
      { value: '1', label: 'Arctic Monkeys' },
      { value: '2', label: 'Звери' },
    ]],
    disabled: [undefined, true],
  }, {
    $adaptivity: 'y',
  }]);
});
