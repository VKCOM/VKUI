import * as React from 'react';
import { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import type { Placement, useFloating } from '../../lib/floating';
import {
  baselineComponent,
  setNodeEnv,
  userEvent,
  waitForFloatingPosition,
} from '../../testing/utils';
import { Avatar } from '../Avatar/Avatar';
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption';
import { CustomSelect, type SelectProps } from './CustomSelect';
import { type CustomSelectRenderOption, type InputChangeReason } from './types';
import styles from './CustomSelect.module.css';

let placementStub: Placement | undefined = undefined;
jest.mock('../../lib/floating', () => {
  const originalModule = jest.requireActual('../../lib/floating');
  return {
    ...originalModule,
    useFloating: (...args: Parameters<typeof useFloating>) => {
      const result = originalModule['useFloating'](args);
      return {
        ...result,
        get placement() {
          return placementStub ?? result.placement;
        },
      };
    },
  };
});

const INPUT_TEST_ID = 'inputTestId';

const getCustomSelectValue = () => screen.getByTestId('labelTextTestId').textContent;

const getInputValue = () => screen.getByTestId<HTMLInputElement>(INPUT_TEST_ID).value;

const CustomSelectControlled = ({
  options,
  initialValue,
  onChange,
  ...restProps
}: Omit<SelectProps, 'value'> & {
  initialValue?: string;
}) => {
  const [value, setValue] = React.useState<SelectProps['value']>(initialValue);
  const handleChange: SelectProps['onChange'] = (e, newValue) => {
    setValue(newValue);
    onChange?.(e, newValue);
  };
  return <CustomSelect {...restProps} options={options} value={value} onChange={handleChange} />;
};

const checkDropdownOpened = (opened = true) => {
  expect(!!screen.queryByRole('listbox')).toBe(opened);
};

const triggerKeydownEvent = async (input: HTMLElement, key: string, code: string) => {
  await React.act(async () => {
    fireEvent.keyDown(input, {
      key,
      code,
    });
  });
};

const mockPropertiesToScroll = (defaultScrollTop = 0) => {
  const setScrollTopStub = jest.fn();

  const dropdownScroll = screen.getByRole('listbox').firstElementChild as HTMLElement;
  jest.spyOn(dropdownScroll, 'offsetHeight', 'get').mockImplementation(() => 200);
  jest.spyOn(dropdownScroll, 'scrollTop', 'get').mockImplementation(() => defaultScrollTop);
  jest.spyOn(dropdownScroll, 'scrollTop', 'set').mockImplementation(setScrollTopStub);

  const optionHeight = 40;

  screen.getAllByRole('option').forEach((option, index) => {
    jest.spyOn(option, 'offsetTop', 'get').mockImplementation(() => optionHeight * index);
    jest.spyOn(option, 'offsetHeight', 'get').mockImplementation(() => optionHeight);
  });

  return setScrollTopStub;
};

describe('CustomSelect', () => {
  afterEach(() => {
    placementStub = undefined;
  });
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

  it('should input value not empty with flag accessible', () => {
    const { rerender } = render(
      <CustomSelect
        data-testid={INPUT_TEST_ID}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        defaultValue={0}
      />,
    );
    expect(getInputValue()).toBe('');

    rerender(
      <CustomSelect
        data-testid={INPUT_TEST_ID}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        defaultValue={0}
        accessible
      />,
    );
    expect(getInputValue()).toBe('Mike');
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
      const [value, setValue] = useState<SelectProps['value']>(0);
      const options = [
        { value: 0, label: 'Mike' },
        { value: 1, label: 'Josh' },
      ];
      return (
        <CustomSelect
          labelTextTestId="labelTextTestId"
          options={options}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
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

  it.each([false, true])('is searchable with accessible=%s', async (accessible) => {
    render(
      <CustomSelect
        searchable
        labelTextTestId="labelTextTestId"
        data-testid={INPUT_TEST_ID}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        accessible={accessible}
      />,
    );

    fireEvent.click(screen.getByTestId('labelTextTestId'));
    await waitFor(() => expect(screen.getByTestId(INPUT_TEST_ID)).toHaveFocus());

    fireEvent.input(screen.getByTestId(INPUT_TEST_ID), { target: { value: 'Mi' } });
    expect(screen.getByTestId<HTMLInputElement>(INPUT_TEST_ID).value).toBe('Mi');
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(getCustomSelectValue()).toEqual('Mike');
    if (accessible) {
      expect(getInputValue()).toEqual('Mike');
    } else {
      expect(getInputValue()).toEqual('');
    }
  });

  it('is custom searchable', () => {
    render(
      <CustomSelect
        searchable
        labelTextTestId="labelTextTestId"
        data-testid={INPUT_TEST_ID}
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

    fireEvent.click(screen.getByTestId(INPUT_TEST_ID));
    fireEvent.change(screen.getByTestId(INPUT_TEST_ID), {
      target: { value: 'usa' },
    });
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(getCustomSelectValue()).toEqual('New York');
  });

  it('is searchable and keeps search results up to date during props.options updates', async () => {
    const { rerender } = render(
      <CustomSelect
        searchable
        data-testid={INPUT_TEST_ID}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId(INPUT_TEST_ID));
    fireEvent.input(screen.getByTestId(INPUT_TEST_ID), { target: { value: 'Mi' } });

    await waitForFloatingPosition();

    expect(screen.getAllByRole('option').length).toEqual(1);

    rerender(
      <CustomSelect
        searchable
        data-testid={INPUT_TEST_ID}
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
        data-testid={INPUT_TEST_ID}
        value={1}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId(INPUT_TEST_ID));

    await waitForFloatingPosition();

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Josh');

    fireEvent.change(screen.getByTestId(INPUT_TEST_ID), { target: { value: 'Jo' } });

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Josh');

    rerender(
      <CustomSelect
        searchable
        data-testid={INPUT_TEST_ID}
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
        data-testid={INPUT_TEST_ID}
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
        data-testid={INPUT_TEST_ID}
        initialValue="3"
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId(INPUT_TEST_ID));

    expect(screen.getByRole('option', { selected: true })).toHaveTextContent('Категория 3');

    fireEvent.change(screen.getByTestId(INPUT_TEST_ID), { target: { value: 'Кат' } });

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
        data-testid={INPUT_TEST_ID}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
      />,
    );

    fireEvent.click(screen.getByTestId(INPUT_TEST_ID));

    await waitForFloatingPosition();

    expect(openCb).toHaveBeenCalledTimes(1);

    fireEvent.blur(screen.getByTestId(INPUT_TEST_ID));

    expect(closeCb).toHaveBeenCalledTimes(1);

    fireEvent.focus(screen.getByTestId(INPUT_TEST_ID));
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(openCb).toHaveBeenCalledTimes(2);

    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    await waitForFloatingPosition();
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(closeCb).toHaveBeenCalledTimes(2);
  });

  it('is controlled by the keyboard', async () => {
    const { rerender } = render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        data-testid={INPUT_TEST_ID}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
          { value: 3, label: 'Bob' },
        ]}
      />,
    );

    fireEvent.focus(screen.getByTestId(INPUT_TEST_ID));
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'Enter',
      code: 'Enter',
    });
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'Enter',
      code: 'Enter',
    });

    await waitForFloatingPosition();

    expect(getCustomSelectValue()).toEqual('Bob');

    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'Enter',
      code: 'Enter',
    });
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    await waitForFloatingPosition();
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(getCustomSelectValue()).toEqual('Josh');

    rerender(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        data-testid={INPUT_TEST_ID}
        options={[
          { disabled: true, value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
          { value: 3, label: 'Bob' },
        ]}
      />,
    );

    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'Enter',
      code: 'Enter',
    });
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    await waitForFloatingPosition();
    fireEvent.keyDown(screen.getByTestId(INPUT_TEST_ID), {
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

  it('clear value externally with empty value', () => {
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
        value={null}
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('');
  });

  it('clear value with default clear button', async () => {
    const onChange = jest.fn();

    const { unmount } = render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        data-testid={INPUT_TEST_ID}
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
    expect(screen.getByTestId(INPUT_TEST_ID)).not.toHaveFocus();
    fireEvent.click(screen.getByRole('button', { hidden: true }));
    expect(getCustomSelectValue()).toEqual('');
    // focus goes to select input
    await waitFor(() => expect(screen.getByTestId(INPUT_TEST_ID)).toHaveFocus());

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
        value={null}
      />,
    );

    fireEvent.click(screen.getByTestId('inputTextId'));
    fireEvent.mouseEnter(screen.getByRole('option', { name: 'Mike' }));
    fireEvent.click(screen.getByRole('option', { name: 'Mike' }));

    expect(screen.queryByRole('button', { hidden: true })).toBeFalsy();
  });

  it('(uncontrolled): calls onChange when click on unselected option and does not call when click on selected ', async () => {
    const onChange = jest.fn();

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
    expect(onChange.mock.calls[0][1]).toBe('1');

    fireEvent.click(screen.getByTestId('labelTextTestId'));

    const selectedOption = screen.getByRole('option', { selected: true, name: 'Josh' });
    fireEvent.mouseEnter(selectedOption);
    fireEvent.click(selectedOption);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][1]).toBe('1');
  });

  it('(uncontrolled): doesn not calls onChange when click default selected option when defaultValue is string and option value is number', async () => {
    const onChange = jest.fn();

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
    const selectedOption = screen.getByRole('option', { selected: true, name: 'Mike' });
    fireEvent.mouseEnter(selectedOption);
    fireEvent.click(selectedOption);

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('(controlled): calls onChange expected amount of times after clearing component and clicking on option without updating controlled prop value', async () => {
    // мы намеренно проверяем кейсы где при нажатии на опцию или на кнопку очистки value проп не меняется
    const onChange = jest.fn();

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
    expect(onChange.mock.calls[1][1]).toBe('1');

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
        value={null}
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
    const onChange = jest.fn();

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
    expect(onChange.mock.calls[0][1]).toBe('1');

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
    expect(onChange.mock.calls[1][1]).toBe('1');

    // третий клик уже по выбранной опции (соответствующей value переданному в CustomSelect)
    // onChange не должен вызываться.
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const selectedOptionThirdClick = screen.getByRole('option', {
      name: 'Mike',
    });
    fireEvent.mouseEnter(selectedOptionThirdClick);
    fireEvent.click(selectedOptionThirdClick);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls[1][1]).toBe('1');
  });

  it('(controlled): does not call onChange on already selected', async () => {
    const onChangeStub = jest.fn();

    render(
      <CustomSelectControlled
        labelTextTestId="labelTextTestId"
        initialValue="0"
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        onChange={onChangeStub}
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
    expect(onChangeStub.mock.calls[0][1]).toBe('1');

    // второй клик по выбранной опции
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const selectedOptionSecondClick = screen.getByRole('option', { selected: true, name: 'Josh' });
    fireEvent.mouseEnter(selectedOptionSecondClick);
    fireEvent.click(selectedOptionSecondClick);

    // onChange не должен вызываться
    expect(onChangeStub).toHaveBeenCalledTimes(1);
    expect(onChangeStub.mock.calls[0][1]).toBe('1');

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
    expect(onChangeStub.mock.calls[1][1]).toBe('0');

    // четвертый клик по выбранной опции
    fireEvent.click(screen.getByTestId('labelTextTestId'));
    const selectedOptionFourthClick = screen.getByRole('option', { selected: true, name: 'Mike' });
    fireEvent.mouseEnter(selectedOptionFourthClick);
    fireEvent.click(selectedOptionFourthClick);

    // onChange не должен вызываться
    expect(onChangeStub).toHaveBeenCalledTimes(2);
    expect(onChangeStub.mock.calls[1][1]).toBe('0');
  });

  it('(controlled): does call onChange on option click when prop value is empty and value is not changing', async () => {
    const onChange = jest.fn();

    render(
      <CustomSelect
        labelTextTestId="labelTextTestId"
        data-testid={INPUT_TEST_ID}
        options={[
          { value: 0, label: 'Mike' },
          { value: 1, label: 'Josh' },
        ]}
        allowClearButton
        onChange={onChange}
        value={null}
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(getCustomSelectValue()).toEqual('');

    // первый клик по не выбранной опции без изменения value
    fireEvent.click(screen.getByTestId(INPUT_TEST_ID));
    const unselectedOptionFirstClick = screen.getByRole('option', {
      selected: false,
      name: 'Mike',
    });
    fireEvent.mouseEnter(unselectedOptionFirstClick);
    fireEvent.click(unselectedOptionFirstClick);

    // onChange должен быть вызван
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][1]).toBe('0');

    // второй клик по другой опции без изменения value
    fireEvent.click(screen.getByTestId(INPUT_TEST_ID));
    const unselectedOptionSecondClick = screen.getByRole('option', {
      selected: false,
      name: 'Josh',
    });
    fireEvent.mouseEnter(unselectedOptionSecondClick);
    fireEvent.click(unselectedOptionSecondClick);

    // onChange должен быть вызван
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls[1][1]).toBe('1');

    // третий клик по той же опции что и в предыдущий раз
    fireEvent.click(screen.getByTestId(INPUT_TEST_ID));
    const unselectedOptionThirdClick = screen.getByRole('option', {
      selected: false,
      name: 'Josh',
    });
    fireEvent.mouseEnter(unselectedOptionThirdClick);
    fireEvent.click(unselectedOptionThirdClick);

    // onChange должен быть вызван
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange.mock.calls[2][1]).toBe('1');
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
        value={null}
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
        data-testid={INPUT_TEST_ID}
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

    const input = screen.getByTestId<HTMLInputElement>(INPUT_TEST_ID);
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

  it('check input should close popover and reset selected option', async () => {
    jest.useFakeTimers();
    const inputRef: React.RefObject<HTMLInputElement | null> = {
      current: null,
    };

    render(
      <CustomSelect
        searchable={true}
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
        defaultValue="0"
        getSelectInputRef={inputRef}
      />,
    );

    const optionsHasFocused = () => {
      return !!document.body.querySelector('[data-hovered="true"]');
    };

    checkDropdownOpened(false);

    // Вводим текст в инпут
    // И проверяем, что дропдаун открылся, а также что нет option в фокусе
    await triggerKeydownEvent(inputRef.current!, 'К', 'KeyR');
    checkDropdownOpened();
    expect(optionsHasFocused()).toBeFalsy();

    // Нажимаем стрелку вниз, тем самым фокусируемся на первом option
    await triggerKeydownEvent(inputRef.current!, 'ArrowDown', 'ArrowDown');
    checkDropdownOpened();
    expect(optionsHasFocused()).toBeTruthy();

    // Вводим еще текст, тем самым сбрасываем фокус с option
    await triggerKeydownEvent(inputRef.current!, 'т', 'KeyN');
    checkDropdownOpened();
    expect(optionsHasFocused()).toBeFalsy();

    // Нажимаем escape, тем самым закрывая дропдаун
    await triggerKeydownEvent(inputRef.current!, 'Escape', 'Escape');
    checkDropdownOpened(false);
  });

  it.each(['ArrowUp', 'ArrowDown', 'Backspace', 'Delete', ' ', 'Spacebar', 'Enter'])(
    'should open dropdown when keydown %s',
    async (key) => {
      jest.useFakeTimers();
      const inputRef: React.RefObject<HTMLInputElement | null> = {
        current: null,
      };
      render(
        <CustomSelect
          searchable={true}
          options={[
            { value: '0', label: 'Не выбрано' },
            { value: '1', label: 'Категория 1' },
            { value: '2', label: 'Категория 2' },
            { value: '3', label: 'Категория 3' },
          ]}
          defaultValue="0"
          getSelectInputRef={inputRef}
        />,
      );

      await React.act(async () => await userEvent.type(inputRef.current!, `{${key}}`));
      checkDropdownOpened(true);
    },
  );

  it('should render wrapper when use renderDropdown prop', () => {
    render(
      <CustomSelect
        renderDropdown={({ defaultDropdownContent }) => (
          <div data-testid="wrapper">{defaultDropdownContent}</div>
        )}
        data-testid="select"
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
        defaultValue="0"
      />,
    );
    fireEvent.click(screen.getByTestId('select'));

    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(4);
  });

  it('should call onInputChange callback when change input', async () => {
    jest.useFakeTimers();
    const inputRef: React.RefObject<HTMLInputElement | null> = {
      current: null,
    };
    const onInputChange = jest.fn();
    render(
      <CustomSelect
        getSelectInputRef={inputRef}
        onInputChange={onInputChange}
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
        defaultValue="0"
      />,
    );
    const checkInputValue = (
      callIndex: number,
      value: string,
      expectedReason: InputChangeReason,
    ) => {
      const params = onInputChange.mock.calls[callIndex];
      const event = params[0];
      const reason = params[1];
      expect(event.target.value).toBe(value);
      expect(reason).toBe(expectedReason);
    };

    await triggerKeydownEvent(inputRef.current!, 'ArrowDown', 'ArrowDown');
    checkDropdownOpened();

    fireEvent.input(inputRef.current!, { target: { value: 'Ка' } });
    checkInputValue(0, 'Ка', 'input');

    fireEvent.input(inputRef.current!, { target: { value: 'Кат' } });
    checkInputValue(1, 'Кат', 'input');

    await triggerKeydownEvent(inputRef.current!, 'Escape', 'Escape');
    checkDropdownOpened(false);

    checkInputValue(2, '', 'close-dropdown');
  });

  it('check scroll to bottom to element', async () => {
    const inputRef: React.RefObject<HTMLInputElement | null> = {
      current: null,
    };

    render(
      <CustomSelect
        data-testid="select"
        getSelectInputRef={inputRef}
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
          { value: '4', label: 'Категория 3' },
          { value: '5', label: 'Категория 3' },
          { value: '6', label: 'Категория 3' },
          { value: '7', label: 'Категория 3' },
        ]}
        defaultValue="4"
      />,
    );
    fireEvent.click(screen.getByTestId('select'));

    const setScrollTop = mockPropertiesToScroll();

    expect(setScrollTop).toHaveBeenCalledTimes(0);

    await triggerKeydownEvent(inputRef.current!, 'ArrowDown', 'ArrowDown');

    expect(setScrollTop).toHaveBeenCalledWith(40);
  });

  it('check scroll to up', async () => {
    const inputRef: React.RefObject<HTMLInputElement | null> = {
      current: null,
    };

    render(
      <CustomSelect
        data-testid="select"
        getSelectInputRef={inputRef}
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
          { value: '4', label: 'Категория 3' },
          { value: '5', label: 'Категория 3' },
          { value: '6', label: 'Категория 3' },
          { value: '7', label: 'Категория 3' },
        ]}
        defaultValue="1"
      />,
    );
    fireEvent.click(screen.getByTestId('select'));

    const setScrollTop = mockPropertiesToScroll(40);

    expect(setScrollTop).toHaveBeenCalledTimes(0);

    await triggerKeydownEvent(inputRef.current!, 'ArrowUp', 'ArrowUp');

    expect(setScrollTop).toHaveBeenCalledWith(0);
  });

  it('should not hover disabled option', async () => {
    render(
      <CustomSelect
        data-testid="select"
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1', disabled: true },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
      />,
    );
    fireEvent.click(screen.getByTestId('select'));
    const option = screen.getByRole('option', { name: 'Категория 1' });

    await React.act(async () => fireEvent.mouseMove(option, { clientY: 20 }));

    expect(option.getAttribute('data-hovered')).toBe('false');
  });

  it.each([
    {
      testName: 'should not lose hover over option on onMouseLeave event when mouse is not moved',
      expectedHover: 'true',
    },
    {
      testName: 'should lose hover over option on onMouseLeave event when mouse moved',
      expectedHover: 'false',
    },
  ])('$testName', async ({ expectedHover }) => {
    const inputRef: React.RefObject<HTMLInputElement | null> = {
      current: null,
    };
    render(
      <CustomSelect
        data-testid="select"
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
        defaultValue="1"
        getSelectInputRef={inputRef}
      />,
    );
    fireEvent.click(screen.getByTestId('select'));
    const option = screen.getByRole('option', { name: 'Категория 1' });

    expect(option.getAttribute('data-hovered')).toBe('true');

    if (expectedHover === 'false') {
      await React.act(async () =>
        fireEvent.mouseMove(inputRef.current!, { clientY: 20, clientX: 20 }),
      );
    }

    await React.act(async () => fireEvent.mouseLeave(option));

    expect(option.getAttribute('data-hovered')).toBe(expectedHover);
  });

  it('should not call select option when not focus to option', async () => {
    const inputRef: React.RefObject<HTMLInputElement | null> = {
      current: null,
    };
    const onChange = jest.fn();
    render(
      <CustomSelect
        getSelectInputRef={inputRef}
        onChange={onChange}
        data-testid="select"
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
      />,
    );
    fireEvent.click(screen.getByTestId('select'));

    await triggerKeydownEvent(inputRef.current!, ' ', 'Space');

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  describe('DEV errors', () => {
    beforeEach(() => setNodeEnv('development'));
    afterEach(() => setNodeEnv('test'));

    it('check error when use different type of values', () => {
      const errorStub = jest.spyOn(global.console, 'error').mockImplementationOnce(noop);

      render(
        <CustomSelect
          options={[
            { value: 0, label: 'Mike' },
            { value: '1', label: 'Josh' },
          ]}
        />,
      );

      expect(errorStub).toHaveBeenCalledWith(
        '%c[VKUI/CustomSelect] Некоторые значения ваших опций имеют разные типы. onChange всегда возвращает строковый тип.',
        undefined,
      );
    });
  });

  it('checks CustomSelect placement class for borders when dropdown is opened and closed during  placement change', async () => {
    const component = render(
      <CustomSelect
        data-testid="select"
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
      />,
    );
    fireEvent.click(screen.getByTestId('select'));
    await waitForFloatingPosition();

    // dropdown по умолчанию открыт вниз и класс для границ выставлен верно
    expect(document.querySelector(`.${styles.popDown}`)).not.toBeNull();

    // меняем позиционирование дропдауна вверх
    placementStub = 'top';
    component.rerender(
      <CustomSelect
        data-testid="select"
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
      />,
    );

    // dropdown открыт вверх и класс для границ выставлен верно
    expect(document.querySelector(`.${styles.popUp}`)).not.toBeNull();

    // закрываем дропдаун и меняем позиционирование вниз
    fireEvent.blur(screen.getByTestId('select'));
    placementStub = 'bottom';
    component.rerender(
      <CustomSelect
        data-testid="select"
        options={[
          { value: '0', label: 'Не выбрано' },
          { value: '1', label: 'Категория 1' },
          { value: '2', label: 'Категория 2' },
          { value: '3', label: 'Категория 3' },
        ]}
      />,
    );

    // снова открываем дропдаун
    // в этот момент внутренне состояние placement CustomSelect указывает вверх
    // но floating-ui возвращает "bottom", а значит и внутренне состояние и
    // границы CustomSelect должны быть выставлены соответственно вниз
    fireEvent.click(screen.getByTestId('select'));
    await waitForFloatingPosition();

    // дропдаун открыт вниз и класс для границ выставлен верно
    expect(document.querySelector(`.${styles.popDown}`)).not.toBeNull();
  });
});
