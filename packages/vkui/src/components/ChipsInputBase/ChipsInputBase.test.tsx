import * as React from 'react';
import { render } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { ChipsInputBase } from './ChipsInputBase';
import type { ChipOption, ChipsInputBasePrivateProps } from './types';

const ChipsInputBaseTest = (props: ChipsInputBasePrivateProps) => (
  <ChipsInputBase data-testid="chips-input" {...props} />
);

const testOption = { value: 'red', label: 'Красный' };
const chipsInputValue: ChipOption[] = [testOption];

describe('ChipsInputBase', () => {
  baselineComponent(ChipsInputBase, {
    // доступность должна быть реализована в обёртках над ChipsInputBase
    a11y: false,
  });

  const onAddChipOption = jest.fn();
  const onRemoveChipOption = jest.fn();

  beforeEach(() => {
    onAddChipOption.mockClear();
    onRemoveChipOption.mockClear();

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders values passed to it', () => {
    const result = render(
      <ChipsInputBaseTest
        value={chipsInputValue}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    expect(result.queryByText('Красный')).not.toBeNull();
  });

  it('adds chips', async () => {
    const result = render(
      <ChipsInputBaseTest
        value={[]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    await userEvent.type(result.getByTestId('chips-input'), 'Красный{enter}');
    expect(onAddChipOption).toHaveBeenCalledWith('Красный');
  });

  it('removes chip on hitting backspace', async () => {
    const result = render(
      <ChipsInputBaseTest
        value={chipsInputValue}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    await userEvent.type(result.getByTestId('chips-input'), '{backspace}');
    expect(onRemoveChipOption).toHaveBeenCalledWith(testOption);
  });

  it('does not delete chips on hitting backspace in readonly mode', async () => {
    const result = render(
      <ChipsInputBaseTest
        readOnly
        value={chipsInputValue}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    await userEvent.type(result.getByTestId('chips-input'), '{backspace}');
    expect(onRemoveChipOption).not.toHaveBeenCalled();
  });

  it('focuses ChipsInputBase on surrounding container click', async () => {
    const result = render(
      <ChipsInputBaseTest
        value={chipsInputValue}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    await userEvent.click(result.getByTestId('chips-input'));
    expect(result.getByTestId('chips-input')).toHaveFocus();
  });

  it('focuses ChipsInputBase on chip click', async () => {
    const result = render(
      <ChipsInputBaseTest
        value={chipsInputValue}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    await userEvent.click(result.queryByText('Красный')!);
    expect(result.getByTestId('chips-input')).toHaveFocus();
  });

  it('add value on blur event if addOnBlur=true', async () => {
    const result = render(
      <ChipsInputBaseTest
        addOnBlur
        value={[]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    await userEvent.type(result.getByTestId('chips-input'), 'Красный');
    await userEvent.click(document.body);
    expect(onAddChipOption).toHaveBeenCalledWith('Красный');
  });
});
