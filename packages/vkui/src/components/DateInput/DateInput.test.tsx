import { baselineComponent } from '../../testing/utils';
import { DateInput } from './DateInput';

describe('DateInput', () => {
  baselineComponent(DateInput, {
    // TODO [a11y]: "Elements must only use allowed ARIA attributes (aria-allowed-attr)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-allowed-attr?application=axeAPI
    a11y: false,
  });
});
