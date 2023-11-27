import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { ChipOption } from '../Chip/Chip';
import { ChipsInputBase, ChipsInputBaseProps } from './ChipsInputBase';

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

  it('adds chips', async () => {
    let value;

    render(<ChipsInputBaseTest value={[]} onChange={(changedValue) => (value = changedValue)} />);

    await userEvent.type(getChipsInputBase(), 'Красный{enter}');

    expect(value).toEqual([{ value: 'Красный', label: 'Красный' }]);
  });

  it('does not lose data when adding an already existing chip', async () => {
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

    await userEvent.type(getChipsInputBase(), 'Красный{enter}');

    expect(value).toEqual([
      { value: 'Синий', label: 'Синий' },
      { value: 'Красный', label: 'Красный' },
    ]);
  });

  it('removes chip on hitting backspace', async () => {
    let value: ChipOption[] | undefined = undefined;

    render(
      <ChipsInputBaseTest
        value={chipsInputValue}
        onChange={(changedValue) => (value = changedValue)}
      />,
    );

    await userEvent.type(getChipsInputBase(), '{backspace}');

    expect(value).toEqual([]);
  });

  it('does not delete chips on hitting backspace in readonly mode', async () => {
    let value: ChipOption[] = [...chipsInputValue];

    render(
      <ChipsInputBaseTest
        readOnly
        value={value}
        onChange={(changedValue) => (value = changedValue)}
      />,
    );

    await userEvent.type(getChipsInputBase(), '{backspace}');

    expect(value).toEqual(chipsInputValue);
  });

  it('focuses ChipsInputBase on surrounding container click', async () => {
    render(<ChipsInputBaseTest value={chipsInputValue} />);

    await userEvent.click(document.querySelector('.vkuiChipsInputBase') as Element);
    expect(getChipsInputBase()).toHaveFocus();
  });

  it('focuses ChipsInputBase on chip click', async () => {
    render(<ChipsInputBaseTest value={chipsInputValue} />);

    await userEvent.click(redChip() as HTMLElement);
    expect(getChipsInputBase()).toHaveFocus();
  });

  it('add value on blur event if addOnBlur=true', async () => {
    let value;

    render(
      <ChipsInputBaseTest
        addOnBlur
        value={[]}
        onChange={(changedValue) => (value = changedValue)}
      />,
    );

    await userEvent.type(getChipsInputBase(), 'Красный');
    await userEvent.click(document.body);

    expect(value).toEqual([{ value: 'Красный', label: 'Красный' }]);
  });
});
