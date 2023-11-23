import * as React from 'react';
import { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { baselineComponent, waitForFloatingPosition } from '../../testing/utils';
import { Avatar } from '../Avatar/Avatar';
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption';
import { CustomSelect, type CustomSelectRenderOption, type SelectProps } from './CustomSelect';

const getCustomSelectValue = () => screen.getByTestId('labelTextTestId').textContent;

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
  baselineComponent((props) => (
    <CustomSelect aria-label="Choose your user" {...props} options={[]} />
  ));

  it('Does not explode on NaN value', () => {
    const h = render(<CustomSelect value={NaN} options={[]} />);
    expect(() => h.rerender(<CustomSelect value={NaN} options={[]} />)).not.toThrow();
  });

  it('works correctly as uncontrolled component', () => {
    render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    expect(getCustomSelectValue()).toEqual('');

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Josh' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

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
          labelTextTestId="labelTextTestId"
          options={options}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      );
    };
    render(<SelectController />);
    expect(getCustomSelectValue()).toEqual('Mike');
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Josh' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);
    expect(getCustomSelectValue()).toEqual('Josh');
  });

  it('works correctly with pinned value', () => {
    const options = [
      { value: 0, label: 'Mike' },
      { value: 1, label: 'Josh' },
    ];

    render(<CustomSelect labelTextTestId="labelTextTestId" options={options} value={0} />);

    expect(getCustomSelectValue()).toEqual('Mike');
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Josh' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);
    expect(getCustomSelectValue()).toEqual('Mike');
  });

  it('correctly reacts on options change', () => {
    const { rerender } = render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
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
        labelTextTestId="labelTextTestId"
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
        labelTextTestId="labelTextTestId"
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
        labelTextTestId="labelTextTestId"
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
        labelTextTestId="labelTextTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    expect(getCustomSelectValue()).toEqual('Josh');

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Mike' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

    expect(getCustomSelectValue()).toEqual('Mike');
  });

  it('accept defaultValue', () => {
    render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        defaultValue={1}
      />,
    );

    expect(getCustomSelectValue()).toEqual('Josh');
  });

  it('is searchable', async () => {
    render(
      <CustomSelect
        searchable
        labelTextTestId="labelTextTestId"
        data-testid="inputTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    await waitFor(() => expect(screen.getByTestId('inputTestId')).toHaveFocus());

    fireEvent.change(screen.getByTestId('inputTestId'), { target: { value: 'Mi' } });
    expect(screen.getByTestId<HTMLInputElement>('inputTestId').value).toBe('Mi');
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(getCustomSelectValue()).toEqual('Mike');
  });

  it('is custom searchable', () => {
    render(
      <CustomSelect
        searchable
        labelTextTestId="labelTextTestId"
        data-testid="inputTestId"
        options={[
          { value: 0, label: 'SPb', country: 'Russia' },
          { value: 1, label: 'Moscow', country: 'Russia' },
          { value: 2, label: 'New York', country: 'USA' },
        ]}
        filterFn={(value, option) =>
          option.label.toLowerCase().includes(value.toLowerCase()) ||
          option.country.toLowerCase().includes(value.toLowerCase())
        }
      />,
    );

    fireEvent.click(screen.getByTestId('inputTestId'));
    fireEvent.change(screen.getByTestId('inputTestId'), {
      target: { value: 'usa' },
    });
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(getCustomSelectValue()).toEqual('New York');
  });

  it('is searchable and keeps search results up to date during props.options updates', async () => {
    const { rerender } = render(
      <CustomSelect
        searchable
        data-testid="inputTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId('inputTestId'));
    fireEvent.change(screen.getByTestId('inputTestId'), { target: { value: 'Mi' } });

    await waitForFloatingPosition();

    expect(screen.getAllByRole('option').length).toEqual(1);

    rerender(
      <CustomSelect
        searchable
        data-testid="inputTestId"
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
        data-testid="inputTestId"
        value={1}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId('inputTestId'));

    await waitForFloatingPosition();

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Josh');

    fireEvent.change(screen.getByTestId('inputTestId'), { target: { value: 'Jo' } });

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Josh');

    rerender(
      <CustomSelect
        searchable
        data-testid="inputTestId"
        value={1}
        options={[
          { value: 0, label: 'Mike' },
          { value: 2, label: 'Mika' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Josh');

    rerender(
      <CustomSelect
        searchable
        data-testid="inputTestId"
        value={3}
        options={[
          { value: 3, label: 'Joe' },
          { value: 0, label: 'Mike' },
          { value: 2, label: 'Mika' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Joe');
  });

  // см. https://github.com/VKCOM/VKUI/issues/3600
  it('is searchable – should correct re-calculate index of the options when them will be filtered', async () => {
    render(
      <CustomSelectControlled
        searchable
        labelTextTestId="labelTextTestId"
        data-testid="inputTestId"
        initialValue="3"
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId('inputTestId'));

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Категория 3');

    fireEvent.change(screen.getByTestId('inputTestId'), { target: { value: 'Кат' } });

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Категория 3');

    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Категория 2' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

    expect(getCustomSelectValue()).toEqual('Категория 2');
  });

  it('fires onOpen and onClose correctly', async () => {
    const openCb = jest.fn(() => null);
    const closeCb = jest.fn(() => null);
    render(
      <CustomSelect
        onOpen={openCb}
        onClose={closeCb}
        data-testid="inputTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId('inputTestId'));

    await waitForFloatingPosition();

    expect(openCb).toHaveBeenCalledTimes(1);

    fireEvent.blur(screen.getByTestId('inputTestId'));

    expect(closeCb).toHaveBeenCalledTimes(1);

    fireEvent.focus(screen.getByTestId('inputTestId'));
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(openCb).toHaveBeenCalledTimes(2);

    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    await waitForFloatingPosition();
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(closeCb).toHaveBeenCalledTimes(2);
  });

  it('is controlled by the keyboard', async () => {
    const { rerender } = render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        data-testid="inputTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
          { value: 3, label: 'Bob' },
        ]}
      />,
    );

    fireEvent.focus(screen.getByTestId('inputTestId'));
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'Enter',
      code: 'Enter',
    });
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'Enter',
      code: 'Enter',
    });

    await waitForFloatingPosition();

    expect(getCustomSelectValue()).toEqual('Bob');

    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'Enter',
      code: 'Enter',
    });
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    await waitForFloatingPosition();
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(getCustomSelectValue()).toEqual('Josh');

    rerender(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        data-testid="inputTestId"
        options={[
          { disabled: true, value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
          { value: 3, label: 'Bob' },
        ]}
      />,
    );

    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'Enter',
      code: 'Enter',
    });
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    await waitForFloatingPosition();
    fireEvent.keyDown(screen.getByTestId('inputTestId'), {
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
        value="invalid"
        onChange={onChange}
        options={[
          { value: '0', label: 'Mike' },
          { value: '1', label: 'Josh' },
        ]}
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('clear value externally with empty string', () => {
    const onChange = jest.fn();

    const { rerender } = render(
      <CustomSelect
        allowClearButton
        labelTextTestId="labelTextTestId"
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
        labelTextTestId="labelTextTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        onChange={onChange}
        value=""
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('');
  });

  it('clear value with default clear button', async () => {
    const onChange = jest.fn();

    const { rerender, unmount } = render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        data-testid="inputTestId"
        clearButtonTestId="clearButtonTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        defaultValue={0}
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('Mike');
    expect(screen.getByTestId('inputTestId')).not.toHaveFocus();
    fireEvent.click(screen.getByRole('button', { hidden: true }));
    expect(getCustomSelectValue()).toEqual('');
    // focus goes to select input
    await waitFor(() => expect(screen.getByTestId('inputTestId')).toHaveFocus());

    expect(onChange).toHaveBeenCalledTimes(1);

    unmount();

    // clear by clicking via button testId
    rerender(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        clearButtonTestId="clearButtonTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        defaultValue={0}
      />,
    );

    expect(getCustomSelectValue()).toEqual('Mike');
    fireEvent.click(screen.getByTestId('clearButtonTestId'));
    expect(getCustomSelectValue()).toEqual('');

    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('(controlled): clearButton is not shown when option selected without props.value change', async () => {
    const onChange = jest.fn();

    render(
      <CustomSelect
        data-testid="inputTextId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value=""
      />,
    );

    fireEvent.click(screen.getByTestId('inputTextId'));
    fireEvent.mouseEnter(screen.getByTitle('Mike'));
    fireEvent.click(screen.getByTitle('Mike'));

    expect(screen.queryByRole('button', { hidden: true })).toBeFalsy();
  });

  it('(uncontrolled): calls onChange when click on unselected option and does not call when click on selected ', async () => {
    const onChange = jest.fn((event: React.ChangeEvent<HTMLSelectElement>) => event.target.value);

    render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        defaultValue={0}
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('Mike');

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Mike');
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Josh' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveReturnedWith('1');

    fireEvent.click(screen.getByTestId('labelTextTestId'));

    const selectedOption = screen.getByRole('option', { selected: true, name: 'Josh' });
    fireEvent.mouseEnter(selectedOption);
    fireEvent.click(selectedOption);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveReturnedWith('1');
  });

  it('(controlled): calls onChange expected amount of times after clearing component and clicking on option without updating controlled prop value', async () => {
    // мы намеренно проверяем кейсы где при нажатии на опцию или на кнопку очистки value проп не меняется
    const onChange = jest.fn((event: React.ChangeEvent<HTMLSelectElement>) => event.target.value);

    const { rerender } = render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value={0}
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('Mike');

    // clear input
    fireEvent.click(screen.getByRole('button', { hidden: true }));

    expect(onChange).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOptionFirstClick = screen.getByRole('option', {
      selected: false,
      name: 'Josh',
    });
    fireEvent.mouseEnter(unselectedOptionFirstClick);
    fireEvent.click(unselectedOptionFirstClick);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveReturnedWith('1');

    // clear input through prop
    rerender(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value=""
      />,
    );

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOptionSecondClick = screen.getByRole('option', {
      selected: false,
      name: 'Mike',
    });
    fireEvent.mouseEnter(unselectedOptionSecondClick);
    fireEvent.click(unselectedOptionSecondClick);

    expect(onChange).toHaveBeenCalledTimes(3);

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOptionThirdClick = screen.getByRole('option', {
      selected: false,
      name: 'Josh',
    });
    fireEvent.mouseEnter(unselectedOptionThirdClick);
    fireEvent.click(unselectedOptionThirdClick);

    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it('(controlled): calls onChange when click on unselected option without value change', async () => {
    const onChange = jest.fn((event: React.ChangeEvent<HTMLSelectElement>) => event.target.value);

    render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value={0}
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('Mike');

    // первый клик по не выбранной опции без изменения value
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Mike');
    const unselectedOptionFirstClick = screen.getByRole('option', {
      selected: false,
      name: 'Josh',
    });
    fireEvent.mouseEnter(unselectedOptionFirstClick);
    fireEvent.click(unselectedOptionFirstClick);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveReturnedWith('1');

    // второй клик по не выбранной опции без изменения value
    // нужно проверить потому что при первом клике внутреннее value CustomSelect (nativeSelectValue) изменилось
    // на value опиции по которой кликнули.
    // При втором оно уже не меняется если кликнули по той же опции, но onChange должен отработать как в первый раз.
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Mike');
    const unselectedOptionSecondClick = screen.getByRole('option', {
      selected: false,
      name: 'Josh',
    });
    fireEvent.mouseEnter(unselectedOptionSecondClick);
    fireEvent.click(unselectedOptionSecondClick);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveReturnedWith('1');

    // третий клик уже по выбранной опции (соответствующей value переданному в CustomSelect)
    // onChange не должен вызываться.
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const selectedOptionThirdClick = screen.getByRole('option', {
      selected: true,
      name: 'Mike',
    });
    fireEvent.mouseEnter(selectedOptionThirdClick);
    fireEvent.click(selectedOptionThirdClick);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveReturnedWith('1');
  });

  it('(controlled): does not call onChange on already selected', async () => {
    const onChangeStub = jest.fn((event: React.ChangeEvent<HTMLSelectElement>) => {
      return event.target.value;
    });

    render(
      <CustomSelectControlled
        labelTextTestId="labelTextTestId"
        initialValue="0"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        onChangeStub={onChangeStub}
      />,
    );

    expect(onChangeStub).toHaveBeenCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('Mike');

    // первый клик по не выбранной опции с изменением value
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Mike');
    const unselectedOptionFirstClick = screen.getByRole('option', {
      selected: false,
      name: 'Josh',
    });
    fireEvent.mouseEnter(unselectedOptionFirstClick);
    fireEvent.click(unselectedOptionFirstClick);

    // onChange должен вызываться
    expect(onChangeStub).toHaveBeenCalledTimes(1);
    expect(onChangeStub).toHaveReturnedWith('1');

    // второй клик по выбранной опции
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const selectedOptionSecondClick = screen.getByRole('option', { selected: true, name: 'Josh' });
    fireEvent.mouseEnter(selectedOptionSecondClick);
    fireEvent.click(selectedOptionSecondClick);

    // onChange не должен вызываться
    expect(onChangeStub).toHaveBeenCalledTimes(1);
    expect(onChangeStub).toHaveReturnedWith('1');

    // третий клик по не выбранной опции
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Josh');
    const unselectedOptionThirdClick = screen.getByRole('option', {
      selected: false,
      name: 'Mike',
    });
    fireEvent.mouseEnter(unselectedOptionThirdClick);
    fireEvent.click(unselectedOptionThirdClick);

    // onChange должен быть вызван
    expect(onChangeStub).toHaveBeenCalledTimes(2);
    expect(onChangeStub).toHaveReturnedWith('0');

    // четвертый клик по выбранной опции
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const selectedOptionFourthClick = screen.getByRole('option', { selected: true, name: 'Mike' });
    fireEvent.mouseEnter(selectedOptionFourthClick);
    fireEvent.click(selectedOptionFourthClick);

    // onChange не должен вызываться
    expect(onChangeStub).toHaveBeenCalledTimes(2);
    expect(onChangeStub).toHaveReturnedWith('0');
  });

  it('(controlled): does call onChange on option click when prop value is empty and value is not changing', async () => {
    const onChange = jest.fn((event: React.ChangeEvent<HTMLSelectElement>) => event.target.value);

    render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        data-testid="inputTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value=""
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('');

    // первый клик по не выбранной опции без изменения value
    fireEvent.click(screen.getByTestId('inputTestId'));
    const unselectedOptionFirstClick = screen.getByRole('option', {
      selected: false,
      name: 'Mike',
    });
    fireEvent.mouseEnter(unselectedOptionFirstClick);
    fireEvent.click(unselectedOptionFirstClick);

    // onChange должен быть вызван
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveReturnedWith('0');

    // второй клик по другой опции без изменения value
    fireEvent.click(screen.getByTestId('inputTestId'));
    const unselectedOptionSecondClick = screen.getByRole('option', {
      selected: false,
      name: 'Josh',
    });
    fireEvent.mouseEnter(unselectedOptionSecondClick);
    fireEvent.click(unselectedOptionSecondClick);

    // onChange должен быть вызван
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveReturnedWith('1');

    // третий клик по той же опции что и в предыдущий раз
    fireEvent.click(screen.getByTestId('inputTestId'));
    const unselectedOptionThirdClick = screen.getByRole('option', {
      selected: false,
      name: 'Josh',
    });
    fireEvent.mouseEnter(unselectedOptionThirdClick);
    fireEvent.click(unselectedOptionThirdClick);

    // onChange должен быть вызван
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveReturnedWith('0');
  });

  it('accepts options with extended option type and Typescript does not throw', () => {
    const { rerender } = render(
      <CustomSelect
        options={[
          { value: 0, label: 'Mike', avatarUrl: 'some-url' },
          { value: 1, label: 'Josh', avatarUrl: 'some other avatarUrl' },
        ]}
        value={1}
      />,
    );

    type PublisherFragmentData = {
      __typename?: 'Publisher';
      id: string;
      title: string;
      logo: string;
    };
    type PublisherSelectOption = {
      data: PublisherFragmentData;
      value: string;
      label: string;
    };

    const complexOptions: PublisherSelectOption[] = [
      {
        value: '1',
        label: 'Mike',
        data: {
          __typename: 'Publisher',
          id: 'some-id-1',
          title: 'Some Title 1',
          logo: 'Some logo 1',
        },
      },
      {
        value: '2',
        label: 'Sam',
        data: {
          __typename: 'Publisher',
          id: 'some-id-2',
          title: 'Some Title 2',
          logo: 'Some logo 2',
        },
      },
    ];

    rerender(<CustomSelect options={complexOptions} />);

    // типизируем render-функцию
    const renderOption = ({
      option,
      ...restProps
    }: CustomSelectRenderOption<PublisherSelectOption>) => {
      return (
        <CustomSelectOption {...restProps} before={<Avatar size={40} src={option.data.logo} />} />
      );
    };

    rerender(
      <CustomSelect
        placeholder="my place"
        disabled={false}
        searchable
        options={complexOptions}
        renderOption={renderOption}
      />,
    );

    // типизируем render-функцию через SelectProps
    const renderOptionViaSelectProp: SelectProps['renderOption'] = ({ option, ...restProps }) => {
      return (
        <CustomSelectOption {...restProps} before={<Avatar size={40} src={option.data.logo} />} />
      );
    };

    rerender(
      <CustomSelect
        placeholder="my place"
        disabled={false}
        searchable
        options={complexOptions}
        renderOption={renderOptionViaSelectProp}
      />,
    );

    // используем рендер функцию inline
    rerender(
      <CustomSelect
        placeholder="my place"
        disabled={false}
        searchable
        options={complexOptions}
        renderOption={({ option, ...restProps }) => {
          return (
            <CustomSelectOption
              {...restProps}
              before={<Avatar size={40} src={option.data.logo} />}
            />
          );
        }}
      />,
    );
  });

  it('shows input placeholder for screen readers only if option is not selected', () => {
    // Это позволяет скринридеру зачитывать placeholder, если опция не выбрана.
    const { rerender } = render(
      <CustomSelect
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        placeholder="Не выбрано"
        allowClearButton
      />,
    );

    expect(screen.queryByPlaceholderText('Не выбрано')).toBeTruthy();

    rerender(
      <CustomSelect
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        value={0}
        placeholder="Не выбрано"
        allowClearButton
      />,
    );

    expect(screen.queryByPlaceholderText('Не выбрано')).toBeFalsy();
  });

  it('native select is reachable via nativeSelectTestId', () => {
    // Это позволяет скринридеру зачитывать placeholder, если опция не выбрана.
    render(
      <CustomSelect
        nativeSelectTestId="nativeSelectTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        placeholder="Не выбрано"
        allowClearButton
        defaultValue={1}
      />,
    );

    const nativeSelect = screen.getByTestId<HTMLSelectElement>('nativeSelectTestId');
    expect(nativeSelect.value).toBe('1');
  });
});
