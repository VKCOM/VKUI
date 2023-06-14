import { baselineComponent } from '../../testing/utils';
import { InputLike } from './InputLike';

describe('InputLike', () => {
  baselineComponent(InputLike, {
    // TODO [a11y]: "Elements must only use allowed ARIA attributes (aria-allowed-attr)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-allowed-attr?application=axeAPI
    a11y: false,
  });
});
