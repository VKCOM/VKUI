import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { FormItem } from './FormItem';
import Input from '../Input/Input';
import { Cell } from '../Cell/Cell';
import RichCell from '../RichCell/RichCell';
import Checkbox from '../Checkbox/Checkbox';
import CellButton from '../CellButton/CellButton';
import Radio from '../Radio/Radio';
import SimpleCell from '../SimpleCell/SimpleCell';

describe('FormItem', () => {
  describeScreenshotFuzz(FormItem, [{
    top: [undefined, 'Сверху'],
    bottom: [undefined, 'Снизу'],
    removable: [undefined, true],
    children: [<Input key={0} placeholder="Введите ваше значение" />],
  }, {
    children: [
      <Cell selectable key="sel">Cell selectable</Cell>,
      <Cell removable key="rem">Cell removable</Cell>,
      <Cell draggable key="drag">Cell draggable</Cell>,
      <Cell draggable removable key="drag-rem">Cell draggable removable</Cell>,
      <Cell draggable selectable key="drag-sel">Cell draggable selectable</Cell>,
      <CellButton key="cellbtn">CellButton</CellButton>,
      <Checkbox key="checkbox">Checkbox</Checkbox>,
      <Radio key="radio">Radio</Radio>,
      <RichCell key="rcell">RichCell</RichCell>,
      <SimpleCell key="scell">SimpleCell</SimpleCell>,
    ],
  }]);
});
