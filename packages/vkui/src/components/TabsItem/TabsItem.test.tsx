import { baselineComponent } from '../../testing/utils';
import { TabsItem } from './TabsItem';

describe('TabsItem', () => {
  baselineComponent(TabsItem, { a11y: false });
});
