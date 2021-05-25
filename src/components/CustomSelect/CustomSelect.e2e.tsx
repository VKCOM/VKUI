import CustomSelect, { CustomSelectProps } from '../CustomSelect/CustomSelect';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('CustomSelect', () => {
  describeScreenshotFuzz((props: CustomSelectProps) => (
    <CustomSelect
      placeholder="Не выбрана"
      options={[
        { value: 1, label: 'Россия' },
        { value: 2, label: 'Украина' },
        { value: 3, label: 'Соединенное королевство Великобритании и Северной Ирландии' },
      ]}
      {...props}
    />
  ), [{
    value: [undefined, 1],
    disabled: [undefined, true],
    align: [undefined, 'center', 'right'],
  }, {
    value: [3],
  }, {
    $adaptivity: 'y',
  }]);
});
