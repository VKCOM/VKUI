import * as React from 'react';
import { a11yBasicTest } from '../../testing/a11y';
import { Value } from './Value';

describe('Value', () => {
  a11yBasicTest((props) => <Value {...props}>10</Value>);
});
