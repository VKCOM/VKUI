import { baselineComponent } from '../../testing/utils';
import { TabsItem } from './TabsItem';

describe('TabsItem', () => {
  baselineComponent(TabsItem, {
    // TODO [a11y]: "Certain ARIA roles must be contained by particular parents (aria-required-parent)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-required-parent?application=axeAPI
    a11y: false,
  });
});
