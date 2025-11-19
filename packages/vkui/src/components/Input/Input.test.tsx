import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Input } from './Input';

describe('Input', () => {
  baselineComponent((props) => (
    <>
      <VisuallyHidden Component="label" id="input">
        Input
      </VisuallyHidden>
      <Input slotProps={{ input: { 'aria-labelledby': 'input' } }} {...props} />
    </>
  ));

  it('should work with slotProps', () => {
    const rootRef1 = createRef<HTMLDivElement>();
    const rootRef2 = createRef<HTMLDivElement>();
    const inputRef1 = createRef<HTMLInputElement>();
    const inputRef2 = createRef<HTMLInputElement>();
    const onRootClick1 = vi.fn();
    const onRootClick2 = vi.fn();
    const onInputClick = vi.fn();

    render(
      <Input
        data-testid="input"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={inputRef1}
        value="value"
        autoComplete="off"
        id="input"
        required
        onChange={noop}
        onClick={onRootClick1}
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
            'data-testid': 'input-2',
            'onClick': onInputClick,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('input')).not.toBeInTheDocument();
    const input = screen.getByTestId('input-2');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('inputClassName');
    expect(input).toHaveValue('value');
    expect(input).toHaveAttribute('autoComplete', 'off');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('id', 'input');

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
