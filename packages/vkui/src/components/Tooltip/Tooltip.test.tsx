import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { Tooltip } from './Tooltip';

describe(Tooltip, () => {
  baselineComponent((props) => (
    <Tooltip shown text="test" {...props}>
      <div>Target</div>
    </Tooltip>
  ));
});
