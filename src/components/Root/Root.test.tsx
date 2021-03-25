import { baselineComponent, mountTest } from '../../testing/utils';
import View from '../View/View';
import Root from './Root';

describe('Root', () => {
  baselineComponent(Root);
  describe('With View', () =>
    mountTest(() => <Root activeView="view"><View id="view" activePanel={null} /></Root>));
});
