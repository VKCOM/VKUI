import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import { useFocusWithin } from './useFocusWithin';

describe(useFocusWithin, () => {
  let focusWithin: boolean | undefined = undefined;
  const Playground = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const ref = React.useRef<HTMLInputElement>(null);
    focusWithin = useFocusWithin(ref);

    return <input data-testid="input" ref={ref} {...props} />;
  };

  it('without focus', () => {
    render(<Playground />);
    expect(focusWithin).toBeFalsy();
  });

  it('focus and blur element', async () => {
    render(<Playground />);
    const el = screen.getByTestId('input');

    act(() => {
      el.focus();
    });
    expect(focusWithin).toBeTruthy();

    act(() => {
      el.blur();
    });
    expect(focusWithin).toBeFalsy();
  });

  it('autoFocus', () => {
    render(<Playground autoFocus />);
    expect(focusWithin).toBeTruthy();
  });
});
