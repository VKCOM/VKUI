import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Switch } from './Switch';

describe('Switch', () => {
  baselineComponent((props) => (
    <>
      <VisuallyHidden Component="label" id="switch">
        Switch
      </VisuallyHidden>
      <Switch aria-labelledby="switch" {...props} />
    </>
  ));
});
