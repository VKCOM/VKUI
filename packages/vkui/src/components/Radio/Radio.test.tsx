import { createRef } from 'react';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Radio } from './Radio';

describe('Radio', () => {
  baselineComponent((props) => (
    <>
      <VisuallyHidden Component="label" id="radio">
        Radio
      </VisuallyHidden>
      <Radio slotProps={{ input: { 'aria-labelledby': 'radio' } }} {...props} />
    </>
  ));

  it('should work with slotProps', () => {
    const rootRef1 = createRef<HTMLLabelElement>();
    const rootRef2 = createRef<HTMLLabelElement>();
    const inputRef1 = createRef<HTMLInputElement>();
    const inputRef2 = createRef<HTMLInputElement>();
    const onInputClick = vi.fn();
    const onRootClick1 = vi.fn();
    const onRootClick2 = vi.fn();

    render(
      <Radio
        data-testid="radio"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={inputRef1}
        checked
        onChange={noop}
        onClick={onRootClick1}
        name="input"
        id="radio"
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
            'data-testid': 'radio-2',
            'checked': false,
            'onClick': onInputClick,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('radio')).not.toBeInTheDocument();
    const input = screen.getByTestId('radio-2');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('inputClassName');
    expect(input).toHaveAttribute('name', 'input');
    expect(input).toHaveAttribute('id', 'radio');
    expect(input).not.toBeChecked();

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

  it('Radio.Input should work with slotProps', () => {
    const rootRef1 = createRef<HTMLLabelElement>();
    const rootRef2 = createRef<HTMLLabelElement>();
    const inputRef1 = createRef<HTMLInputElement>();
    const inputRef2 = createRef<HTMLInputElement>();
    const onInputClick = vi.fn();
    const onRootClick1 = vi.fn();
    const onRootClick2 = vi.fn();

    render(
      <Radio.Input
        data-testid="radio"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={inputRef1}
        checked
        onChange={noop}
        onClick={onRootClick1}
        name="input"
        id="radio"
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
            'data-testid': 'radio-2',
            'checked': false,
            'onClick': onInputClick,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('radio')).not.toBeInTheDocument();
    const input = screen.getByTestId('radio-2');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('inputClassName');
    expect(input).toHaveAttribute('name', 'input');
    expect(input).toHaveAttribute('id', 'radio');
    expect(input).not.toBeChecked();

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

  test('label and input can receive data-testid', () => {
    render(
      <React.Fragment>
        <Radio
          name="pay"
          value="cash"
          slotProps={{
            root: { 'data-testid': 'label-cash-id' },
            input: { 'data-testid': 'input-cash-id' },
          }}
          defaultChecked
        >
          Оплата наличными
        </Radio>
        <Radio
          name="pay"
          value="card"
          slotProps={{
            root: { 'data-testid': 'label-card-id' },
            input: { 'data-testid': 'input-card-id' },
          }}
        >
          Оплата картой
        </Radio>
      </React.Fragment>,
    );

    const inputCash = screen.getByTestId<HTMLInputElement>('input-cash-id');
    const labelCash = screen.getByTestId<HTMLLabelElement>('label-cash-id');

    expect(inputCash.checked).toBeTruthy();
    expect(inputCash.matches('input')).toBeTruthy();
    expect(labelCash.matches('label')).toBeTruthy();

    const inputCard = screen.getByTestId<HTMLInputElement>('input-card-id');
    expect(inputCard.checked).toBeFalsy();
    const labelCard = screen.getByTestId<HTMLLabelElement>('label-card-id');

    fireEvent.click(labelCard);
    expect(inputCard.checked).toBeTruthy();
    expect(inputCash.checked).toBeFalsy();
  });
});
