import * as React from 'react';
import { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { baselineComponent, waitForFloatingPosition } from '../../testing/utils';
import { Avatar } from '../Avatar/Avatar';
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption';
import { CustomSelect, type CustomSelectRenderOption, type SelectProps } from './CustomSelect';

const checkCustomSelectLabelValue = (label: string) => {
  expect(screen.getByTestId('labelTextTestId').textContent).toEqual(label);
  expect(screen.getByRole<HTMLInputElement>('combobox').value).toEqual(label);
};

const CustomSelectControlled = ({
  options,
  initialValue,
  onChangeStub,
  ...restProps
}: Omit<SelectProps, 'value' | 'onChange'> & {
  initialValue?: string;
  onChangeStub?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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
    jest.spyOn(global.console, 'error').mockImplementationOnce((message) => {
      if (message.includes('Received NaN')) {
        return;
      }
      global.console.error(message);
    });
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

    checkCustomSelectLabelValue('');

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Josh' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

    checkCustomSelectLabelValue('Josh');
  });

  it('works correctly as controlled component', () => {
    const SelectController = () => {
      const [value, setValue] = useState('0');
      const options = [
        { value: '0', label: 'Mike' },
        { value: '1', label: 'Josh' },
      ];
      return (
        <React.Fragment>
          <CustomSelect
            labelTextTestId="labelTextTestId"
            options={options}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => setValue('')}>Clear controlled value</button>
        </React.Fragment>
      );
    };
    render(<SelectController />);

    checkCustomSelectLabelValue('Mike');

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Josh' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

    checkCustomSelectLabelValue('Josh');

    fireEvent.click(screen.getByRole('button', { name: /Clear controlled value/ }));

    checkCustomSelectLabelValue('');
  });

  it('works correctly with pinned value', () => {
    const options = [
      { value: 0, label: 'Mike' },
      { value: 1, label: 'Josh' },
    ];

    render(<CustomSelect labelTextTestId="labelTextTestId" options={options} value={0} />);

    checkCustomSelectLabelValue('Mike');

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Josh' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

    checkCustomSelectLabelValue('Mike');
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

    checkCustomSelectLabelValue('Josh');

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

    checkCustomSelectLabelValue('Josh');

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

    checkCustomSelectLabelValue('Felix');
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

    checkCustomSelectLabelValue('Josh');

    rerender(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    checkCustomSelectLabelValue('Josh');

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Mike' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

    checkCustomSelectLabelValue('Mike');
  });

  it('accepts defaultValue', () => {
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

    checkCustomSelectLabelValue('Josh');
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

    checkCustomSelectLabelValue('');

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

    checkCustomSelectLabelValue('Mike');
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

    checkCustomSelectLabelValue('');

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

    checkCustomSelectLabelValue('New York');
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
        labelTextTestId="labelTextTestId"
        data-testid="inputTestId"
        value={1}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    checkCustomSelectLabelValue('Josh');

    fireEvent.click(screen.getByTestId('inputTestId'));

    await waitForFloatingPosition();

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Josh');

    fireEvent.change(screen.getByTestId('inputTestId'), { target: { value: 'Jo' } });

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Josh');

    rerender(
      <CustomSelect
        searchable
        labelTextTestId="labelTextTestId"
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
        labelTextTestId="labelTextTestId"
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
    checkCustomSelectLabelValue('Joe');
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

    checkCustomSelectLabelValue('Категория 3');

    fireEvent.click(screen.getByTestId('inputTestId'));

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Категория 3');

    fireEvent.change(screen.getByTestId('inputTestId'), { target: { value: 'Кат' } });

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Категория 3');

    const unselectedOption = screen.getByRole('option', { selected: false, name: 'Категория 2' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

    checkCustomSelectLabelValue('Категория 2');
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

    checkCustomSelectLabelValue('Bob');

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

    checkCustomSelectLabelValue('Josh');

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

    checkCustomSelectLabelValue('Bob');
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

    checkCustomSelectLabelValue('Josh');

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
    checkCustomSelectLabelValue('');
  });

  it('clear value with default clear button', async () => {
    const onChange = jest.fn();

    const { unmount } = render(
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
    checkCustomSelectLabelValue('Mike');

    expect(screen.getByTestId('inputTestId')).not.toHaveFocus();
    fireEvent.click(screen.getByRole('button', { hidden: true }));
    checkCustomSelectLabelValue('');
    // focus goes to select input
    await waitFor(() => expect(screen.getByTestId('inputTestId')).toHaveFocus());

    expect(onChange).toHaveBeenCalledTimes(1);

    unmount();

    // clear by clicking via button testId
    render(
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

    checkCustomSelectLabelValue('Mike');
    fireEvent.click(screen.getByTestId('clearButtonTestId'));

    checkCustomSelectLabelValue('');
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
    fireEvent.mouseEnter(screen.getByRole('option', { name: 'Mike' }));
    fireEvent.click(screen.getByRole('option', { name: 'Mike' }));

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
    checkCustomSelectLabelValue('Mike');

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
    checkCustomSelectLabelValue('Mike');

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
    checkCustomSelectLabelValue('Mike');

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
          { value: '0', label: 'Mike' },
          { value: '1', label: 'Josh' },
        ]}
        onChangeStub={onChangeStub}
      />,
    );

    expect(onChangeStub).toHaveBeenCalledTimes(0);
    checkCustomSelectLabelValue('Mike');

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
    checkCustomSelectLabelValue('');

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

  it('has placeholder', () => {
    render(
      <CustomSelect
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        labelTextTestId="labelTextTestId"
        placeholder="Не выбрано"
      />,
    );

    // input placeholder
    expect(screen.queryByPlaceholderText('Не выбрано')).toBeTruthy();
    // элемент поверх скрытого инпута
    expect(screen.getByTestId('labelTextTestId').textContent).toEqual('Не выбрано');
  });

  it('native select is reachable via nativeSelectTestId', () => {
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

  it('passes required prop to native select, not input', () => {
    render(
      <CustomSelect
        nativeSelectTestId="nativeSelectTestId"
        data-testid="inputTestId"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        placeholder="Не выбрано"
        allowClearButton
        defaultValue={1}
        required
      />,
    );

    const nativeSelect = screen.getByTestId<HTMLSelectElement>('nativeSelectTestId');
    expect(nativeSelect.required).toBeTruthy();

    const input = screen.getByTestId<HTMLInputElement>('inputTestId');
    expect(input.required).toBeFalsy();
  });

  it('check getSelectInputRef: ref value not null', () => {
    const inputRef: React.Ref<HTMLInputElement> = {
      current: null,
    };
    render(
      <CustomSelect
        getSelectInputRef={inputRef}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        placeholder="Не выбрано"
      />,
    );
    expect(inputRef.current).not.toBeNull();
  });
});
