import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { render } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  baselineComponent(Counter, { forward: false });
  baselineComponent((p) => <Counter {...p}>10</Counter>);
  it('Does not render empty', () => {
    expect(render(<Counter />).container).toBeEmptyDOMElement();
    expect(render(<Counter>{null}</Counter>).container).toBeEmptyDOMElement();
    expect(render(<Counter>{[]}</Counter>).container).toBeEmptyDOMElement();
  });
});
