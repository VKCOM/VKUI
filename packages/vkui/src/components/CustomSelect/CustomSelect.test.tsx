import * as React from 'react';
import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, waitForFloatingPosition } from '../../testing/utils';
import { CustomSelect, type SelectProps } from './CustomSelect';

const getCustomSelectValue = () => screen.getByTestId('target').textContent;

const CustomSelectControlled = ({
  options,
  initialValue,
  onChangeStub,
  ...restProps
}: Omit<SelectProps, 'value' | 'onChange'> & {
  initialValue?: string;
  onChangeStub?(event: React.ChangeEvent<HTMLSelectElement>): void;
}) => {
  const [value, setValue] = React.useState(initialValue);
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value);
    onChangeStub?.(event);
  };
  return <CustomSelect {...restProps} options={options} value={value} onChange={handleChange} />;
};

describe('CustomSelect', () => {
  baselineComponent(CustomSelect);

  it('Does not explode on NaN value', () => {
    const h = render(<CustomSelect value={NaN} options={[]} />);
    expect(() => h.rerender(<CustomSelect value={NaN} options={[]} />)).not.toThrow();
  });

  it('works correctly as uncontrolled component', () => {
    render(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    expect(getCustomSelectValue()).toEqual('');

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));

    expect(getCustomSelectValue()).toEqual('Josh');
  });

  it('works correctly as controlled component', () => {
    const SelectController = () => {
      const [value, setValue] = useState(0);
      const options = [
        { value: 0, label: 'Mike' },
        { value: 1, label: 'Josh' },
      ];
      return (
        <CustomSelect
          data-testid="target"
          options={options}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      );
    };
    render(<SelectController />);
    expect(getCustomSelectValue()).toEqual('Mike');
    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));
    expect(getCustomSelectValue()).toEqual('Josh');
  });

  it('works correctly with pinned value', () => {
    const options = [
      { value: 0, label: 'Mike' },
      { value: 1, label: 'Josh' },
    ];

    render(<CustomSelect data-testid="target" options={options} value={0} />);

    expect(getCustomSelectValue()).toEqual('Mike');
    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));
    expect(getCustomSelectValue()).toEqual('Mike');
  });

  it('correctly reacts on options change', () => {
    const { rerender } = render(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        value={1}
      />,
    );

    expect(getCustomSelectValue()).toEqual('Josh');

    rerender(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 1, label: 'Josh' },
          { value: 2, label: 'Anna' },
        ]}
        value={1}
      />,
    );

    expect(getCustomSelectValue()).toEqual('Josh');

    rerender(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 2, label: 'Anna' },
          { value: 3, label: 'Felix' },
        ]}
        value={3}
      />,
    );

    expect(getCustomSelectValue()).toEqual('Felix');
  });

  it('correctly converts from controlled to uncontrolled state', () => {
    const { rerender } = render(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        value={1}
      />,
    );

    expect(getCustomSelectValue()).toEqual('Josh');

    rerender(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    expect(getCustomSelectValue()).toEqual('Josh');

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Mike'));
    fireEvent.click(screen.getByTitle('Mike'));

    expect(getCustomSelectValue()).toEqual('Mike');
  });

  it('accept defaultValue', () => {
    render(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        defaultValue={1}
      />,
    );

    expect(getCustomSelectValue()).toEqual('Josh');
  });

  it('is searchable', () => {
    render(
      <CustomSelect
        searchable
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId('target')); // here target is SelectMimicry

    expect(screen.getByTestId('target')).toHaveFocus(); // now target is Input

    fireEvent.change(screen.getByTestId('target'), { target: { value: 'Mi' } });
    expect(screen.getByTestId<HTMLInputElement>('target').value).toBe('Mi');
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(getCustomSelectValue()).toEqual('Mike');
  });

  it('is custom searchable', () => {
    render(
      <CustomSelect
        searchable
        data-testid="target"
        options={[
          { value: 0, label: 'SPb', country: 'Russia' },
          { value: 1, label: 'Moscow', country: 'Russia' },
          { value: 2, label: 'New York', country: 'USA' },
        ]}
        filterFn={(value, option) =>
          (option.label as string).toLowerCase().includes(value.toLowerCase()) ||
          option.country.toLowerCase().includes(value.toLowerCase())
        }
      />,
    );

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.change(screen.getByTestId('target'), {
      target: { value: 'usa' },
    });
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(getCustomSelectValue()).toEqual('New York');
  });

  it('is searchable and keeps search results up to date during props.options updates', async () => {
    const { rerender } = render(
      <CustomSelect
        searchable
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.change(screen.getByTestId('target'), { target: { value: 'Mi' } });

    await waitForFloatingPosition();

    expect(screen.getAllByRole('option').length).toEqual(1);

    rerender(
      <CustomSelect
        searchable
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
          { value: 2, label: 'Mika' },
        ]}
      />,
    );

    expect(screen.getAllByRole('option').length).toEqual(2);
  });

  it('is searchable and keeps selected option up to date during props.options and props.value updates', async () => {
    const { rerender } = render(
      <CustomSelect
        searchable
        data-testid="target"
        value={1}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId('target'));

    await waitForFloatingPosition();

    expect(screen.getByTitle('Josh').getAttribute('aria-selected')).toEqual('true');

    fireEvent.change(screen.getByTestId('target'), { target: { value: 'Jo' } });

    expect(screen.getByTitle('Josh').getAttribute('aria-selected')).toEqual('true');

    rerender(
      <CustomSelect
        searchable
        data-testid="target"
        value={1}
        options={[
          { value: 0, label: 'Mike' },
          { value: 2, label: 'Mika' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    expect(screen.getByTitle('Josh').getAttribute('aria-selected')).toEqual('true');

    rerender(
      <CustomSelect
        searchable
        data-testid="target"
        value={3}
        options={[
          { value: 3, label: 'Joe' },
          { value: 0, label: 'Mike' },
          { value: 2, label: 'Mika' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    expect(screen.getByTitle('Joe').getAttribute('aria-selected')).toEqual('true');
  });

  // см. https://github.com/VKCOM/VKUI/issues/3600
  it('is searchable – should correct re-calculate index of the options when them will be filtered', async () => {
    render(
      <CustomSelectControlled
        searchable
        data-testid="target"
        initialValue="3"
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId('target'));

    expect(screen.getByTitle('Категория 3')).toHaveAttribute('aria-selected', 'true');

    fireEvent.change(screen.getByTestId('target'), { target: { value: 'Кат' } });

    expect(screen.getByTitle('Категория 3')).toHaveAttribute('aria-selected', 'true');

    fireEvent.mouseEnter(screen.getByTitle('Категория 2'));
    fireEvent.click(screen.getByTitle('Категория 2'));

    expect(getCustomSelectValue()).toEqual('Категория 2');
  });

  it('fires onOpen and onClose correctly', async () => {
    const openCb = jest.fn(() => null);
    const closeCb = jest.fn(() => null);
    render(
      <CustomSelect
        onOpen={openCb}
        onClose={closeCb}
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId('target'));

    await waitForFloatingPosition();

    expect(openCb).toBeCalledTimes(1);

    fireEvent.blur(screen.getByTestId('target'));

    expect(closeCb).toBeCalledTimes(1);

    fireEvent.focus(screen.getByTestId('target'));
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(openCb).toBeCalledTimes(2);

    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    await waitForFloatingPosition();
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(closeCb).toBeCalledTimes(2);
  });

  it('is controlled by the keyboard', async () => {
    const { rerender } = render(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
          { value: 3, label: 'Bob' },
        ]}
      />,
    );

    fireEvent.focus(screen.getByTestId('target'));
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'Enter',
      code: 'Enter',
    });
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'Enter',
      code: 'Enter',
    });

    await waitForFloatingPosition();

    expect(getCustomSelectValue()).toEqual('Bob');

    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'Enter',
      code: 'Enter',
    });
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    await waitForFloatingPosition();
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(getCustomSelectValue()).toEqual('Josh');

    rerender(
      <CustomSelect
        data-testid="target"
        options={[
          { disabled: true, value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
          { value: 3, label: 'Bob' },
        ]}
      />,
    );

    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'Enter',
      code: 'Enter',
    });
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    await waitForFloatingPosition();
    fireEvent.keyDown(screen.getByTestId('target'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(getCustomSelectValue()).toEqual('Bob');
  });

  // https://github.com/VKCOM/VKUI/issues/4066
  it('invalid value does not call onChange', () => {
    const onChange = jest.fn();

    render(
      <CustomSelect
        data-testid="target"
        value="invalid"
        onChange={onChange}
        options={[
          { value: '0', label: 'Mike' },
          { value: '1', label: 'Josh' },
        ]}
      />,
    );

    expect(onChange).toBeCalledTimes(0);
  });

  it('clear value externally with empty string', () => {
    const onChange = jest.fn();

    const { rerender } = render(
      <CustomSelect
        allowClearButton
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        onChange={onChange}
        value={1}
      />,
    );

    rerender(
      <CustomSelect
        allowClearButton
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        onChange={onChange}
        value=""
      />,
    );

    expect(onChange).toBeCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('');
  });

  it('clear value with default clear button', async () => {
    const onChange = jest.fn();

    render(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        defaultValue={0}
      />,
    );

    expect(onChange).toBeCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('Mike');
    fireEvent.click(screen.getByRole('button', { hidden: true }));
    expect(getCustomSelectValue()).toEqual('');

    expect(onChange).toBeCalledTimes(1);
  });

  it('(controlled): clearButton is not shown when option selected without props.value change', async () => {
    const onChange = jest.fn();

    render(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value=""
      />,
    );

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Mike'));
    fireEvent.click(screen.getByTitle('Mike'));

    expect(screen.queryByRole('button', { hidden: true })).toBeFalsy();
  });

  it('(controlled): calls onChange expected amount of times after clearing component and clicking on option without updating controlled prop value', async () => {
    // мы намеренно проверяем кейсы где при нажатии на опцию или на кнопку очистки value проп не меняется
    const onChange = jest.fn((event: React.ChangeEvent<HTMLSelectElement>) => event.target.value);

    const { rerender } = render(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value={0}
      />,
    );

    expect(onChange).toBeCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('Mike');

    // clear input
    fireEvent.click(screen.getByRole('button', { hidden: true }));

    expect(onChange).toBeCalledTimes(1);

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));

    expect(onChange).toBeCalledTimes(2);
    expect(onChange).toHaveReturnedWith('1');

    // clear input through prop
    rerender(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value=""
      />,
    );

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Mike'));
    fireEvent.click(screen.getByTitle('Mike'));

    expect(onChange).toBeCalledTimes(3);

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));

    expect(onChange).toBeCalledTimes(4);
  });

  it('(controlled): calls onChange when click on unselected option without value change', async () => {
    const onChange = jest.fn((event: React.ChangeEvent<HTMLSelectElement>) => event.target.value);

    render(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value={0}
      />,
    );

    expect(onChange).toBeCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('Mike');

    // первый клик по не выбранной опции без изменения value
    fireEvent.click(screen.getByTestId('target'));
    expect(screen.getByTitle('Mike')).toHaveAttribute('aria-selected', 'true');
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toHaveReturnedWith('1');

    // второй клик по не выбранной опции без изменения value
    // нужно проверить потому что при первом клике внутреннее value селекта (nativeSelectValue) изменилось
    // на value опиции по которой кликнули.
    // При втором оно уже не меняется если кликнули по той же опции, но onChange должен отработать как в первый раз.
    fireEvent.click(screen.getByTestId('target'));
    expect(screen.getByTitle('Mike')).toHaveAttribute('aria-selected', 'true');
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));

    expect(onChange).toBeCalledTimes(2);
    expect(onChange).toHaveReturnedWith('1');

    // третий клик уже по выбранной опции (соответствующей value переданному в контролируемый селект),
    // onChange не должен вызываться.
    fireEvent.click(screen.getByTestId('target'));
    expect(screen.getByTitle('Mike')).toHaveAttribute('aria-selected', 'true');
    fireEvent.mouseEnter(screen.getByTitle('Mike'));
    fireEvent.click(screen.getByTitle('Mike'));

    expect(onChange).toBeCalledTimes(2);
    expect(onChange).toHaveReturnedWith('1');
  });

  it('(controlled): does not call onChange on already selected', async () => {
    const onChangeStub = jest.fn((event: React.ChangeEvent<HTMLSelectElement>) => {
      return event.target.value;
    });

    render(
      <CustomSelectControlled
        data-testid="target"
        initialValue="0"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        onChangeStub={onChangeStub}
      />,
    );

    expect(onChangeStub).toBeCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('Mike');

    // первый клик по не выбранной опции с изменением value
    fireEvent.click(screen.getByTestId('target'));
    expect(screen.getByTitle('Mike')).toHaveAttribute('aria-selected', 'true');
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));

    // onChange должен вызываться
    expect(onChangeStub).toBeCalledTimes(1);
    expect(onChangeStub).toHaveReturnedWith('1');

    // второй клик по выбранной опции
    fireEvent.click(screen.getByTestId('target'));
    expect(screen.getByTitle('Josh')).toHaveAttribute('aria-selected', 'true');
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));

    // onChange не должен вызываться
    expect(onChangeStub).toBeCalledTimes(1);
    expect(onChangeStub).toHaveReturnedWith('1');

    // третий клик по не выбранной опции
    fireEvent.click(screen.getByTestId('target'));
    expect(screen.getByTitle('Josh')).toHaveAttribute('aria-selected', 'true');
    fireEvent.mouseEnter(screen.getByTitle('Mike'));
    fireEvent.click(screen.getByTitle('Mike'));

    // onChange должен быть вызван
    expect(onChangeStub).toBeCalledTimes(2);
    expect(onChangeStub).toHaveReturnedWith('0');

    // четвертый клик по выбранной опции
    fireEvent.click(screen.getByTestId('target'));
    expect(screen.getByTitle('Mike')).toHaveAttribute('aria-selected', 'true');
    fireEvent.mouseEnter(screen.getByTitle('Mike'));
    fireEvent.click(screen.getByTitle('Mike'));

    // onChange не должен вызываться
    expect(onChangeStub).toBeCalledTimes(2);
    expect(onChangeStub).toHaveReturnedWith('0');
  });

  it('(controlled): does call onChange on option click when prop value is empty and value is not changning', async () => {
    const onChange = jest.fn((event: React.ChangeEvent<HTMLSelectElement>) => event.target.value);

    render(
      <CustomSelect
        data-testid="target"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value=""
      />,
    );

    expect(onChange).toBeCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('');

    // первый клик по не выбранной опции без изменения value
    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Mike'));
    fireEvent.click(screen.getByTitle('Mike'));

    // onChange должен быть вызван
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toHaveReturnedWith('0');

    // второй клик по другой опции без изменения value
    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));

    // onChange должен быть вызван
    expect(onChange).toBeCalledTimes(2);
    expect(onChange).toHaveReturnedWith('1');

    // третий клик по той же опции что и в предыдущий раз
    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));

    // onChange должен быть вызван
    expect(onChange).toBeCalledTimes(3);
    expect(onChange).toHaveReturnedWith('0');
  });
});
