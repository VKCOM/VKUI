import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { Value } from './Value';

describe('Value', () => {
  baselineComponent((props) => <Value {...props}>10</Value>);
});
