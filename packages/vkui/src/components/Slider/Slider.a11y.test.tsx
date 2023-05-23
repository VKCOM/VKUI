import * as React from 'react';
import { a11yBasicTest } from '../../testing/a11y';
import { Slider } from './Slider';

describe('Slider', () => {
  a11yBasicTest((props) => <Slider getAriaLabel={() => 'Some slider'} {...props} />);
});
