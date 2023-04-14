import { baselineComponent, polymorphicComponent } from '../../testing/utils';
import { FormItem } from './FormItem';

describe('FormItem', () => {
  baselineComponent(FormItem);
  polymorphicComponent(FormItem<'div'>);
});
