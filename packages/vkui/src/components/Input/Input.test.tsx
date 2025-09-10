import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Input } from './Input';

describe('Input', () => {
  baselineComponent((props) => (
    <>
      <VisuallyHidden Component="label" id="input">
        Input
      </VisuallyHidden>
      <Input aria-labelledby="input" {...props} />
    </>
  ));

  it('should working without slots', () => {
    const rootRef = React.createRef<HTMLDivElement | null>();
    const inputRef = React.createRef<HTMLInputElement | null>();
    render(
      <Input
        getRootRef={rootRef}
        getRef={inputRef}
        data-testid="input"
        value="Test value"
        onChange={jest.fn}
        name="input"
      />,
    );

    expect(rootRef.current!.tagName).toBe('SPAN');
    expect(inputRef.current!.tagName).toBe('INPUT');
    expect(inputRef.current).toBe(screen.getByTestId('input'));

    expect(inputRef.current!.value).toBe('Test value');
    expect(inputRef.current!.name).toBe('input');
  });

  it('should working with slotsProps', () => {
    const rootRef = React.createRef<HTMLDivElement | null>();
    const inputRef = React.createRef<HTMLInputElement | null>();
    render(
      <Input
        getRootRef={rootRef}
        data-testid="root"
        value="Test value"
        onChange={jest.fn}
        name="input"
        slotsProps={{
          input: {
            'getRootRef': inputRef,
            'data-testid': 'input',
          },
        }}
      />,
    );

    expect(screen.getByTestId('root')).toBe(rootRef.current);
    expect(screen.getByTestId('input')).toBe(inputRef.current);

    expect(inputRef.current!.value).toBe('Test value');
    expect(inputRef.current!.name).toBe('input');
  });
});
