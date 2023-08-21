import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { useAutoFocus } from './useAutoFocus';

const Playground = ({ autoFocus, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useAutoFocus(ref, autoFocus);

  return <div data-testid="div" ref={ref} tabIndex={0} {...props} />;
};

describe(useAutoFocus, () => {
  it('autoFocus not set', () => {
    const onFocus = jest.fn();
    render(<Playground onFocus={onFocus} />);

    expect(onFocus).not.toBeCalled();

    const el = screen.getByTestId('div');
    expect(document.activeElement).not.toBe(el);
  });

  it('set autoFocus', () => {
    const onFocus = jest.fn();
    render(<Playground onFocus={onFocus} autoFocus />);

    expect(onFocus).toBeCalled();

    const el = screen.getByTestId('div');
    expect(document.activeElement).toBe(el);
  });
});
