import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import { ChipsInputBase, ChipsInputBaseProps } from './ChipsInputBase';
import { ChipOption } from '../Chip/Chip';

const ChipsInputBaseTest = (props: ChipsInputBaseProps<ChipOption>) => (
  <ChipsInputBase data-testid="chips-input" {...props} />
);

const chipsInputValue: ChipOption[] = [{ value: 'red', label: 'Красный' }];
const redChip = () => screen.queryByText('Красный');
const getChipsInputBase = () => screen.getByTestId('chips-input');

describe('ChipsInputBase', () => {
  baselineComponent(ChipsInputBase);

  it('renders values passed to it', () => {
    render(<ChipsInputBaseTest value={chipsInputValue} />);

    expect(redChip()).not.toBeNull();
  });

  it('adds chips', () => {
    let value;

    render(<ChipsInputBaseTest value={[]} onChange={(changedValue) => (value = changedValue)} />);

    userEvent.type(getChipsInputBase(), 'Красный{enter}');

    expect(value).toEqual([{ value: 'Красный', label: 'Красный' }]);
  });

  it('does not lose data when adding an already existing chip', () => {
    let value: ChipOption[] | undefined = undefined;

    render(
      <ChipsInputBaseTest
        value={[
          { value: 'Красный', label: 'Красный' },
          { value: 'Синий', label: 'Синий' },
        ]}
        onChange={(changedValue) => (value = changedValue)}
      />,
    );

    userEvent.type(getChipsInputBase(), 'Красный{enter}');

    expect(value).toEqual([
      { value: 'Синий', label: 'Синий' },
      { value: 'Красный', label: 'Красный' },
    ]);
  });

  it('removes chip on hitting backspace', () => {
    let value: ChipOption[] | undefined = undefined;

    render(
      <ChipsInputBaseTest
        value={chipsInputValue}
        onChange={(changedValue) => (value = changedValue)}
      />,
    );

    userEvent.type(getChipsInputBase(), '{backspace}');

    expect(value).toEqual([]);
  });

  it('does not delete chips on hitting backspace in readonly mode', () => {
    let value: ChipOption[] = [...chipsInputValue];

    render(
      <ChipsInputBaseTest
        readOnly
        value={value}
        onChange={(changedValue) => (value = changedValue)}
      />,
    );

    userEvent.type(getChipsInputBase(), '{backspace}');

    expect(value).toEqual(chipsInputValue);
  });

  it('focuses ChipsInputBase on surrounding container click', () => {
    render(<ChipsInputBaseTest value={chipsInputValue} />);

    userEvent.click(document.querySelector('.vkuiChipsInputBase') as Element);
    expect(getChipsInputBase()).toHaveFocus();
  });

  it('focuses ChipsInputBase on chip click', () => {
    render(<ChipsInputBaseTest value={chipsInputValue} />);

    userEvent.click(redChip() as HTMLElement);
    expect(getChipsInputBase()).toHaveFocus();
  });
});
