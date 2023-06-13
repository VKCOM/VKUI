import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Radio } from './Radio';

describe('Radio', () => {
  baselineComponent((props) => (
    <>
      <VisuallyHidden Component="label" id="radio">
        Radio
      </VisuallyHidden>
      <Radio aria-labelledby="radio" {...props} />
    </>
  ));
});
