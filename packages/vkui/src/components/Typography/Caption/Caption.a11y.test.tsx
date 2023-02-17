import * as React from 'react';
import { a11yBasicTest } from '../../../testing/a11y';
import { Caption } from './Caption';

describe('Caption', () => {
  a11yBasicTest((props) => (
    <Caption level="1" {...props}>
      Caption 1
    </Caption>
  ));
});
