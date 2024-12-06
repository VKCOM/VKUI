import { baselineComponent } from '../../../testing/utils';
import { SegmentedControlOption } from './SegmentedControlOption';

describe('SegmentedControlOption', () => {
  baselineComponent((props) => (
    <SegmentedControlOption {...props} role="radio">
      SegmentedControlOption
    </SegmentedControlOption>
  ));
});
