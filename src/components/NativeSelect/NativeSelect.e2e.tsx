import NativeSelect, { NativeSelectProps } from '../NativeSelect/NativeSelect';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('NativeSelect', () => {
  describeScreenshotFuzz((props: NativeSelectProps) => (
    <NativeSelect placeholder="Не выбран" {...props}>
      <option value="m">Мужской</option>
      <option value="f">Женский</option>
    </NativeSelect>
  ), [{
    value: [undefined, 'm'],
    disabled: [undefined, true],
    align: [undefined, 'center', 'right'],
  }, {
    $adaptivity: 'y',
  }, {
    placeholder: [undefined, 'placeholder'],
    value: ['', 'm'],
  }]);
});
