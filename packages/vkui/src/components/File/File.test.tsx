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
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onRootClick = vi.fn();

    render(
      <File
        data-testid="file"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={inputRef1}
        onClick={onClick1}
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
            'onClick': onRootClick,
          },
          input: {
            'className': 'inputClassName',
            'getRootRef': inputRef2,
            'data-testid': 'file-2',
            'onClick': onClick2,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('file')).not.toBeInTheDocument();
    const input = screen.getByTestId('file-2');
    expect(input).toBeInTheDocument();
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
    expect(onClick1).toHaveBeenCalledTimes(1);
    expect(onClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick).toHaveBeenCalledTimes(3);
  });
});
