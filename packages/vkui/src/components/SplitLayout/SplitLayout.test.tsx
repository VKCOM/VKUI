import { baselineComponent } from '../../testing/utils';
import { SplitLayout } from './SplitLayout';

describe('SplitLayout', () => {
  baselineComponent(SplitLayout, { a11y: false });
});
