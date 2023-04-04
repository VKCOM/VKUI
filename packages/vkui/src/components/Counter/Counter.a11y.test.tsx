import * as React from 'react';
import { a11yBasicTest } from '../../testing/a11y';
import { Counter } from './Counter';

describe('Counter', () => {
  a11yBasicTest((props) => <Counter {...props}>10</Counter>);
});
