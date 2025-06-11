import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { ChipsInput } from './ChipsInput';

describe(ChipsInput, () => {
  baselineComponent((props) => (
    <>
      <label htmlFor="chips">Chips Input</label>
      <ChipsInput {...props} id="chips" chipsListLabel="Выбранные опции" />
    </>
  ));

  it('check reset form event', async () => {
    const onChange = jest.fn();
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

    expect(onChange).toBeCalledWith([]);
  });

  it('should clear value when click on remove button', async () => {
    const onChange = jest.fn();
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
    await userEvent.click(screen.getByTestId('delete'));
    expect(onChange).toBeCalledWith([]);
  });

  it('should show clear button when inputValue !== ""', () => {
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
        value={[]}
        inputValue="Синий"
      />,
    );
    expect(screen.getByTestId('delete')).toBeInTheDocument();
  });

  it('should delete option when keydown {Delete}', async () => {
    const onChange = jest.fn();
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
    chip.focus();

    await userEvent.keyboard('{Delete}');

    const resultValue = [...initialOptions];
    resultValue.pop();
    expect(onChange).toBeCalledWith(resultValue);
  });

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
      const onChange = jest.fn();
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
          data-testid="input"
          onChange={onChange}
          delimiter={delimiter}
        />,
      );
      fireEvent.input(screen.getByTestId('input'), {
        target: { value: str },
      });
      if (expectedValues) {
        expect(onChange).toBeCalledWith([
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
