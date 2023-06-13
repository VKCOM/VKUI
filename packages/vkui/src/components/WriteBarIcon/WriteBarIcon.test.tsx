import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { WriteBarIcon } from './WriteBarIcon';

describe('WriteBarIcon', () => {
  baselineComponent((props) => <WriteBarIcon aria-label="WriteBarIcon" {...props} />);

  it('shows counter when count={0} is provided', () => {
    const count = 0;

    render(<WriteBarIcon mode="attach" count={0} />);
    const counter = screen.getByText(count.toString());

    expect(counter).toBeInTheDocument();
  });
});
