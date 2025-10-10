import { act, createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, userEvent, withFakeTimers } from '../../testing/utils';
import { ChipsInput } from './ChipsInput';

describe(ChipsInput, () => {
  baselineComponent((props) => (
    <>
      <label htmlFor="chips">Chips Input</label>
      <ChipsInput {...props} id="chips" chipsListLabel="Выбранные опции" />
    </>
  ));

  it(
    'should work with slotsProps',
    withFakeTimers(async () => {
      const rootRef1 = createRef<HTMLDivElement>();
      const rootRef2 = createRef<HTMLDivElement>();
      const inputRef1 = createRef<HTMLInputElement>();
      const inputRef2 = createRef<HTMLInputElement>();
      const onClick1 = vi.fn();
      const onClick2 = vi.fn();
      const onRootClick = vi.fn();
      const onInputChange1 = vi.fn();
      const onInputChange2 = vi.fn();

      render(
        <ChipsInput
          value={[]}
          inputValue="input-value"
          onInputChange={onInputChange1}
          data-testid="input"
          className="rootClassName"
          getRootRef={rootRef1}
          getRef={inputRef1}
          onClick={onClick1}
          style={{
            backgroundColor: 'rgb(255, 0, 0)',
          }}
          slotsProps={{
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
              'data-testid': 'input-2',
              'onClick': onClick2,
              'value': 'input-value-2',
              'onChange': onInputChange2,
            },
          }}
        />,
      );

      expect(screen.queryByTestId('input')).not.toBeInTheDocument();
      const input = screen.getByTestId('input-2');
      expect(input).toBeInTheDocument();
      expect(input).toHaveClass('inputClassName');
      expect(input).toHaveValue('input-value-2');

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
      expect(onRootClick).toHaveBeenCalledTimes(2);

      await userEvent.type(input, 'v');
      expect(onInputChange1).toHaveBeenCalledTimes(1);
      expect(onInputChange2).toHaveBeenCalledTimes(1);
    }),
  );

  it('check reset form event', async () => {
    const onChange = vi.fn();
    render(
      <form data-testid="form">
        <ChipsInput
          id="color"
          placeholder="Введите цвета"
          allowClearButton
          value={[
            {
              value: 'navarin',
              label: 'Наваринского пламени с дымом',
            },
            {
              value: 'red',
              label: 'Красный',
            },
            {
              value: 'blue',
              label: 'Синий',
            },
          ]}
          onChange={onChange}
        />
      </form>,
    );

    fireEvent(screen.getByTestId('form'), new Event('reset'));

    expect(onChange).toHaveBeenCalledExactlyOnceWith([]);
  });

  it('should clear value when click on remove button', () => {
    const onChange = vi.fn();
    render(
      <ChipsInput
        id="color"
        placeholder="Введите цвета"
        ClearButton={(props) => (
          <div {...props} data-testid="delete">
            Delete
          </div>
        )}
        allowClearButton
        value={[
          {
            value: 'navarin',
            label: 'Наваринского пламени с дымом',
          },
          {
            value: 'red',
            label: 'Красный',
          },
          {
            value: 'blue',
            label: 'Синий',
          },
        ]}
        onChange={onChange}
      />,
    );
    fireEvent.click(screen.getByTestId('delete'));
    expect(onChange).toHaveBeenCalledExactlyOnceWith([]);
  });

  it('should show clear button when inputValue !== ""', () => {
    render(
      <ChipsInput
        ClearButton={(props) => (
          <div {...props} data-testid="delete">
            Delete
          </div>
        )}
        allowClearButton
        value={[]}
        slotsProps={{
          input: {
            id: 'color',
            placeholder: 'Введите цвета',
            value: 'Синий',
          },
        }}
      />,
    );
    expect(screen.getByTestId('delete')).toBeInTheDocument();
  });

  it(
    'should delete option when keydown {Delete}',
    withFakeTimers(async () => {
      const onChange = vi.fn();
      const initialOptions = [
        {
          value: 'navarin',
          label: 'Наваринского пламени с дымом',
        },
        {
          value: 'red',
          label: 'Красный',
        },
        {
          value: 'blue',
          label: 'Синий',
        },
      ];
      const { container } = render(
        <ChipsInput
          id="color"
          placeholder="Введите цвета"
          value={initialOptions}
          onChange={onChange}
        />,
      );
      const chip = container.querySelector('div[data-value="blue"]') as HTMLElement;
      act(() => {
        chip.focus();
      });

      await userEvent.keyboard('{Delete}');

      const resultValue = [...initialOptions];
      resultValue.pop();
      expect(onChange).toHaveBeenCalledExactlyOnceWith(resultValue);
    }),
  );

  it.each<{
    delimiter: string | RegExp | string[];
    str: string;
    expectedValues?: string[];
    expectedInputValue?: string;
  }>([
    {
      delimiter: ',',
      str: 'Зеленый,Фиолетовый',
      expectedValues: ['Зеленый', 'Фиолетовый'],
    },
    {
      delimiter: new RegExp(','),
      str: 'Зеленый,Фиолетовый',
      expectedValues: ['Зеленый', 'Фиолетовый'],
    },
    {
      delimiter: /\./,
      str: 'Зеленый.Фиолетовый',
      expectedValues: ['Зеленый', 'Фиолетовый'],
    },
    {
      delimiter: [',', '.'],
      str: 'Зеленый,Фиолетовый.Красный',
      expectedValues: ['Зеленый', 'Фиолетовый', 'Красный'],
    },
    {
      delimiter: '.',
      str: 'Зеленый.Фиолетовый',
      expectedValues: ['Зеленый', 'Фиолетовый'],
    },
    {
      delimiter: [' ', ',', '.', '|'],
      str: 'Зеленый.Фиолетовый,Красный|Розовый Синий',
      expectedValues: ['Зеленый', 'Фиолетовый', 'Красный', 'Розовый', 'Синий'],
    },
    {
      delimiter: ['', ''],
      str: 'Зеленый,Фиолетовый.Красный',
      expectedInputValue: 'Зеленый,Фиолетовый.Красный',
    },
  ])(
    'should correct use delimiter $delimiter',
    ({ delimiter, str, expectedValues, expectedInputValue }) => {
      const onChange = vi.fn();
      render(
        <ChipsInput
          value={[
            {
              value: 'navarin',
              label: 'Наваринского пламени с дымом',
            },
            {
              value: 'red',
              label: 'Красный',
            },
          ]}
          onChange={onChange}
          delimiter={delimiter}
          slotsProps={{
            input: {
              'data-testid': 'input',
            },
          }}
        />,
      );
      fireEvent.input(screen.getByTestId('input'), {
        target: { value: str },
      });
      if (expectedValues) {
        expect(onChange).toHaveBeenCalledExactlyOnceWith([
          {
            value: 'navarin',
            label: 'Наваринского пламени с дымом',
          },
          {
            value: 'red',
            label: 'Красный',
          },
          ...expectedValues.map((value) => ({
            value,
            label: value,
          })),
        ]);
      } else {
        expect(onChange).not.toHaveBeenCalled();
      }
      expect(screen.getByTestId<HTMLInputElement>('input').value).toBe(expectedInputValue || '');
    },
  );
});
