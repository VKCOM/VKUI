import { baselineComponent } from '../../testing/utils';
import { FormLayout } from './FormLayout';

describe('FormLayout', () => {
  baselineComponent(FormLayout, {
    // TODO [a11y]: https://github.com/VKCOM/VKUI/issues/4004
    // @deprecated
    a11y: false,
  });
});
