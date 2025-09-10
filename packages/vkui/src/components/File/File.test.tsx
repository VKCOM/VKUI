import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { File } from './File';

describe('File', () => {
  baselineComponent(File);

  it('should working without slotsProps', () => {
    const rootRef = React.createRef<HTMLLabelElement | null>();
    const inputRef = React.createRef<HTMLInputElement | null>();
    render(
      <File
        getRootRef={rootRef}
        getRef={inputRef}
        data-testid="input"
        checked
        onChange={jest.fn}
      />,
    );

    expect(rootRef.current!.tagName).toBe('LABEL');
    expect(inputRef.current!.tagName).toBe('INPUT');
    expect(inputRef.current).toBe(screen.getByTestId('input'));
    expect(inputRef.current!.checked).toBeTruthy();
  });

  it('should working with slotsProps', () => {
    const rootRef = React.createRef<HTMLLabelElement | null>();
    const inputRef = React.createRef<HTMLInputElement | null>();
    render(
      <File
        getRootRef={rootRef}
        data-testid="root"
        disabled
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
    expect(rootRef.current!.tagName).toBe('LABEL');
    expect(inputRef.current!.tagName).toBe('INPUT');
    expect(inputRef.current!.disabled).toBeTruthy();
  });
});
