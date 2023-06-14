import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Input } from './Input';

describe('Input', () => {
  baselineComponent((props) => (
    <>
      <VisuallyHidden Component="label" id="input">
        Input
      </VisuallyHidden>
      <Input aria-labelledby="input" {...props} />
    </>
  ));
});
