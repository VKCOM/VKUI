import { describe } from 'vitest';
import { baselineComponent } from '../../../testing/utils';
import { SegmentedControlOption, type SegmentedControlOptionProps } from './SegmentedControlOption';

describe('SegmentedControlOption', () => {
  baselineComponent<SegmentedControlOptionProps>(({ getRef, getRootRef, ref, ...props }) => (
    <SegmentedControlOption
      inputProps={{ ...props, role: 'radio' }}
      getRef={getRef}
      getRootRef={getRootRef}
      ref={ref}
    >
      SegmentedControlOption
    </SegmentedControlOption>
  ));
});
