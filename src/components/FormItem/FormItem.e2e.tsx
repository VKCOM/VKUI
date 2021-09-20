import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { FormItem } from './FormItem';
import { CellButton } from '../CellButton/CellButton';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import RichCell from '../RichCell/RichCell';
import SimpleCell from '../SimpleCell/SimpleCell';

describe('FormItem', () => {
  describeScreenshotFuzz(FormItem, [{
    top: [undefined, 'Сверху'],
    bottom: [undefined, 'Снизу'],
    removable: [undefined, true],
    children: [<Input key={0} placeholder="Введите ваше значение" />],
  }, {
    children: [
      <CellButton key="cellbtn">CellButton</CellButton>,
      <Checkbox key="checkbox">Checkbox</Checkbox>,
      <Radio key="radio">Radio</Radio>,
      <RichCell key="rcell">RichCell</RichCell>,
      <SimpleCell key="scell">SimpleCell</SimpleCell>,
    ],
  }]);
});
