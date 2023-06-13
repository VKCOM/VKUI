import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { SegmentedControlOption } from './SegmentedControlOption';

describe('SegmentedControlOption', () => {
  baselineComponent((props) => (
    <SegmentedControlOption {...props}>SegmentedControlOption</SegmentedControlOption>
  ));
});
