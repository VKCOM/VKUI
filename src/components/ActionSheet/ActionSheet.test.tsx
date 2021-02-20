import { ViewWidth } from '../../hoc/withAdaptivity';
import { baselineComponent } from '../../testing/utils';
import ActionSheet from './ActionSheet';

describe('ActionSheet', () => {
  describe('desktop', () => {
    const toggle = document.createElement('div');
    baselineComponent((p) => <ActionSheet {...p} toggleRef={toggle} />, {
      adaptivity: { viewWidth: ViewWidth.DESKTOP, hasMouse: true },
    });
  });
  describe('mobile', () =>
    baselineComponent(ActionSheet, { adaptivity: { viewWidth: ViewWidth.MOBILE, hasMouse: false } }));
});
