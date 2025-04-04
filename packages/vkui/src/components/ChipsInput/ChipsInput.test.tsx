import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { ChipsInput } from './ChipsInput';

describe(ChipsInput, () => {
  baselineComponent(ChipsInput, {
    a11yConfig: {
      rules: {
        // TODO: listbox не имеет label/title/labelledby
        // https://dequeuniversity.com/rules/axe/4.9/aria-input-field-name?application=axeAPI
        'aria-input-field-name': { enabled: false },
        // TODO: combobox is not allowed as children of listbox
        // https://dequeuniversity.com/rules/axe/4.9/aria-required-children?application=axeAPI
        'aria-required-children': { enabled: false },
        // TODO: real input has no assiciated label
        // https://dequeuniversity.com/rules/axe/4.9/label?application=axeAPI
        'label': { enabled: false },
      },
    },
  });

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

  it('should add some options by splitting by delimiter', async () => {
    const onChange = jest.fn();
    render(
      <ChipsInput
        data-testid="input"
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
        delimiter=","
      />,
    );
    fireEvent.input(screen.getByTestId('input'), { target: { value: 'Зеленый,Фиолетовый' } });
    expect(onChange).toBeCalledWith([
      {
        value: 'navarin',
        label: 'Наваринского пламени с дымом',
      },
      {
        value: 'red',
        label: 'Красный',
      },
      {
        value: 'Зеленый',
        label: 'Зеленый',
      },
      {
        value: 'Фиолетовый',
        label: 'Фиолетовый',
      },
    ]);
    expect(screen.getByTestId<HTMLInputElement>('input').value).toBe('');
  });
});
