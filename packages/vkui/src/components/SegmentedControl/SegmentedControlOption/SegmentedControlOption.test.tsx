import { baselineComponent } from '../../../testing/utils';
import { SegmentedControlOption, type SegmentedControlOptionProps } from './SegmentedControlOption';

describe('SegmentedControlOption', () => {
  baselineComponent<SegmentedControlOptionProps>(({ getRef, getRootRef, ...props }) => (
    <SegmentedControlOption
      inputProps={{ ...props, role: 'radio' }}
      getRef={getRef}
      getRootRef={getRootRef}
    >
      SegmentedControlOption
    </SegmentedControlOption>
  ));
});
