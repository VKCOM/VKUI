import { baselineComponent } from '../../testing/utils';
import { render, screen } from '@testing-library/react';
import ChipsSelect, { ChipsSelectProps } from './ChipsSelect';
import userEvent from '@testing-library/user-event';
import { ChipsInputOption } from '../ChipsInput/ChipsInput';

const ChipsSelectTest = (props: ChipsSelectProps<ChipsInputOption>) => (
  <ChipsSelect data-testid="chips-select" {...props} />
);
// const redChip = () => screen.queryByText('Красный');
const getChipsSelect = () => screen.getByTestId('chips-select');

const colors: ChipsInputOption[] = [{ value: 'red', label: 'Красный' }, { value: 'blue', label: 'Синий' }, { value: 'navarin', label: 'Наваринского пламени с дымом' }];

describe('ChipsSelect', () => {
  baselineComponent(ChipsSelect);

  it('does not focus ChipsSelect on chip click', () => {
    let selectedColors: ChipsInputOption[] = [{ value: 'red', label: 'Красный' }];
    const setSelectedColors = (updatedColors: ChipsInputOption[]) => {
      selectedColors = [...updatedColors];
    };

    const colorsChipsProps = {
      value: selectedColors,
      onChange: setSelectedColors,
      options: colors,
      top: 'Выберите или добавьте цвета',
      placeholder: 'Не выбраны',
      creatable: true,
    };

    render(
      <ChipsSelectTest {...colorsChipsProps} />,
    );

    const redChipRemove = screen.getByLabelText('Удалить Красный');

    userEvent.click(redChipRemove);
    expect(getChipsSelect()).not.toHaveFocus();
  });
});
