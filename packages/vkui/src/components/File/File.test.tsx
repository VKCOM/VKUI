import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { File } from './File';

describe('File', () => {
  baselineComponent(File);

  it('should work with slotProps', () => {
    const rootRef1 = createRef<HTMLLabelElement>();
    const rootRef2 = createRef<HTMLLabelElement>();
    const inputRef1 = createRef<HTMLInputElement>();
    const inputRef2 = createRef<HTMLInputElement>();
    const onRootClick1 = vi.fn();
    const onRootClick2 = vi.fn();
    const onInputClick = vi.fn();

    render(
      <File
        data-testid="file"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={inputRef1}
        onClick={onRootClick1}
        id="file"
        name="file"
        accept=".txt"
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
        }}
        slotProps={{
          root: {
            'data-testid': 'root',
            'className': 'rootClassName-2',
            'style': {
              color: 'rgb(255, 0, 0)',
            },
            'getRootRef': rootRef2,
            'onClick': onRootClick2,
          },
          input: {
            'className': 'inputClassName',
            'getRootRef': inputRef2,
            'data-testid': 'file-2',
            'onClick': onInputClick,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('file')).not.toBeInTheDocument();
    const input = screen.getByTestId('file-2');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'file');
    expect(input).toHaveAttribute('id', 'file');
    expect(input).toHaveAttribute('accept', '.txt');

    expect(input).toHaveClass('inputClassName');

    const root = screen.getByTestId('root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('rootClassName');
    expect(root).toHaveClass('rootClassName-2');
    expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(root).toHaveStyle('color: rgb(255, 0, 0)');

    expect(rootRef1.current).toBe(rootRef2.current);
    expect(rootRef1.current).toBe(root);

    expect(inputRef1.current).toBe(inputRef2.current);
    expect(inputRef1.current).toBe(input);

    fireEvent.click(input);
    expect(onInputClick).toHaveBeenCalledTimes(1);
    expect(onRootClick1).toHaveBeenCalledTimes(1);
    expect(onRootClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick1).toHaveBeenCalledTimes(2);
    expect(onRootClick2).toHaveBeenCalledTimes(2);
  });
});
