import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { ChipsInput } from './ChipsInput';

describe(ChipsInput, () => {
  baselineComponent(ChipsInput, { a11y: false });

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
});
