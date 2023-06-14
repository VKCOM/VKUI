import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { VisuallyHiddenInput } from './VisuallyHiddenInput';

describe('VisuallyHiddenInput', () => {
  baselineComponent((props) => (
    <VisuallyHidden Component="label">
      VisuallyHiddenInput: <VisuallyHiddenInput {...props} />
    </VisuallyHidden>
  ));
});
