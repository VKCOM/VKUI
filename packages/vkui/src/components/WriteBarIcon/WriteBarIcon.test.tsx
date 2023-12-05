import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { WriteBarIcon } from './WriteBarIcon';

describe('WriteBarIcon', () => {
  baselineComponent((props) => <WriteBarIcon label="WriteBarIcon" {...props} />);

  it('adds default text context for assigned mode', () => {
    render(<WriteBarIcon data-testid="button" mode="send" />);

    expect(screen.getByTestId('button')).toHaveTextContent('Отправить');
  });

  it('overrides mode default text content when label is provided', () => {
    const label = 'Send Message';
    render(<WriteBarIcon data-testid="button" mode="send" label={label} />);

    expect(screen.getByTestId('button')).toHaveTextContent(label);
  });

  it('shows counter when count={0} is provided', () => {
    const count = 0;

    render(<WriteBarIcon mode="attach" count={0} />);
    const counter = screen.getByText(count.toString());

    expect(counter).toBeInTheDocument();
  });
});
