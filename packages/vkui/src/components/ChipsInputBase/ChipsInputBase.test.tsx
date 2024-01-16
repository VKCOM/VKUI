import * as React from 'react';
import { render } from '@testing-library/react';
import { baselineComponent, userEvent, withRegExp } from '../../testing/utils';
import { ChipsInputBase } from './ChipsInputBase';
import type { ChipOption, ChipsInputBasePrivateProps } from './types';

const ChipsInputBaseTest = ({
  inputValue: inputValueProp,
  ...restProps
}: ChipsInputBasePrivateProps) => {
  const [inputValue, setInputValue] = React.useState(inputValueProp);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <ChipsInputBase
      data-testid="chips-input"
      {...restProps}
      inputValue={inputValue}
      onInputChange={handleInputChange}
    />
  );
};

const TEST_OPTION = { value: 'red', label: 'Красный' };
const chipsInputValue: ChipOption[] = [TEST_OPTION];

describe('ChipsInputBase', () => {
  baselineComponent(ChipsInputBaseTest, {
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

  it('focuses to chip on hitting backspace', async () => {
    const result = render(
      <ChipsInputBaseTest
        value={chipsInputValue}
        inputValue="0"
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    const chipsInputLocator = result.getByTestId('chips-input');
    await userEvent.type(chipsInputLocator, '{backspace}');
    expect(chipsInputLocator).toHaveFocus();
    await userEvent.type(chipsInputLocator, '{backspace}');
    expect(chipsInputLocator.previousSibling).toHaveFocus();
  });

  it.each(['delete', 'backspace'])(
    'does not delete chips on hitting "%s" key in readonly mode',
    async (type) => {
      const result = render(
        <ChipsInputBaseTest
          readOnly
          value={chipsInputValue}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
        />,
      );
      const chipEl = result.getByRole('option', { name: withRegExp(TEST_OPTION.label) });
      await userEvent.click(chipEl);
      await userEvent.type(chipEl, `{${type}}`);
      expect(onRemoveChipOption).not.toHaveBeenCalled();
    },
  );

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

  it('focuses on chip after click', async () => {
    const result = render(
      <ChipsInputBaseTest
        value={chipsInputValue}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    const chipEl = result.getByRole('option', { name: withRegExp(TEST_OPTION.label) });
    await userEvent.click(chipEl);
    expect(chipEl).toHaveFocus();
  });

  it.todo('focuses on input field after removing only one chip');

  it.todo('focuses on nearest chip after removing one of chip');

  it.todo('focuses on last focused chip after focus to component');

  it.todo('focuses on last focused chip after enter to component with hitting "tab" key');

  it.todo('focuses on last focused chip after hitting "shift + tab" key');

  it.todo('navigates between chip with arrow buttons');

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
