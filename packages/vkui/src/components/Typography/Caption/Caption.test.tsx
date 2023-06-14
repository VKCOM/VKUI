import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { Caption } from './Caption';

describe('Caption', () => {
  baselineComponent((props) => (
    <Caption level="1" {...props}>
      Caption 1
    </Caption>
  ));
});
