import { baselineComponent } from '../../testing/utils';
import { CardScroll } from './CardScroll';

describe('CardScroll', () => {
  baselineComponent(CardScroll, {
    a11y: false,
  });
});
