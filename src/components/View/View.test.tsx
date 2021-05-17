import { baselineComponent, mountTest } from '../../testing/utils';
import { Panel } from '../Panel/Panel';
import View from './View';

describe('View', () => {
  baselineComponent(View);
  describe('With Panel', () =>
    mountTest(() => <View activePanel="panel"><Panel id="panel" /></View>));
});
