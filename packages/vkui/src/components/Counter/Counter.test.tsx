import * as React from 'react';
import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Counter } from './Counter';

describe('Counter', () => {
  baselineComponent((p) => <Counter {...p}>10</Counter>);
  it('Does not render empty', () => {
    expect(render(<Counter />).container).toBeEmptyDOMElement();
    expect(render(<Counter>{null}</Counter>).container).toBeEmptyDOMElement();
    expect(render(<Counter>{[]}</Counter>).container).toBeEmptyDOMElement();
  });
});
