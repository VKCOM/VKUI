import * as React from 'react';
import { act, render, within } from '@testing-library/react';
import { baselineComponent, userEvent, withRegExp } from '../../testing/utils';
import { ChipsInputBase } from './ChipsInputBase';
import type { ChipsInputBasePrivateProps } from './types';

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

const RED_OPTION = { value: 'red', label: 'Красный' };

const BLUE_OPTION = { value: 'blue', label: 'Синий' };

const YELLOW_OPTION = { value: 'yellow', label: 'Жёлтый' };

describe(ChipsInputBase, () => {
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
        value={[RED_OPTION]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    expect(result.queryByText('Красный')).not.toBeNull();
  });

  it('adds chip', async () => {
    const result = render(
      <ChipsInputBaseTest
        value={[]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    await act(() => userEvent.type(result.getByTestId('chips-input'), 'Красный{enter}'));
    expect(onAddChipOption).toHaveBeenCalledWith('Красный');
  });

  it('adds value on blur event if `addOnBlur` is `true`', async () => {
    const result = render(
      <ChipsInputBaseTest
        addOnBlur
        value={[]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    await act(() => userEvent.type(result.getByTestId('chips-input'), 'Красный'));
    await act(() => userEvent.click(document.body));
    expect(onAddChipOption).toHaveBeenCalledWith('Красный');
  });

  it('removes chip with icon button', async () => {
    const result = render(
      <ChipsInputBaseTest
        value={[RED_OPTION]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    const chipRedLocator = result.getByRole('option', { name: withRegExp(RED_OPTION.label) });
    const removeButton = within(chipRedLocator).getByRole('button');
    await act(() => userEvent.click(removeButton));
    expect(onRemoveChipOption).toHaveBeenCalledWith(RED_OPTION.value);
  });

  it.each(['Delete', 'Backspace'])('removes chip when pressing {%s}', async (type) => {
    const result = render(
      <ChipsInputBaseTest
        value={[RED_OPTION]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
      />,
    );
    await act(() => userEvent.tab());
    await act(() =>
      userEvent.type(
        result.getByRole('option', { name: withRegExp(RED_OPTION.label) }),
        `{${type}}`,
      ),
    );
    expect(onRemoveChipOption).toHaveBeenCalledWith(RED_OPTION.value);
  });

  it.each(['Delete', 'Backspace'])(
    'does not delete chips when pressing {%s} in readonly mode',
    async (type) => {
      const result = render(
        <ChipsInputBaseTest
          readOnly
          value={[RED_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
        />,
      );
      await act(() => userEvent.tab());
      await act(() =>
        userEvent.type(
          result.getByRole('option', { name: withRegExp(RED_OPTION.label) }),
          `{${type}}`,
        ),
      );
      expect(onRemoveChipOption).not.toHaveBeenCalled();
    },
  );

  describe('focus', () => {
    it('focuses on input field after clicking to container', async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
        />,
      );
      const containerEl = result.getByRole('listbox').closest('div')!;
      await act(() => userEvent.click(containerEl));
      expect(result.getByTestId('chips-input')).toHaveFocus();
    });

    it('focuses to first chip after clicking to container', async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
        />,
      );
      const containerEl = result.getByRole('listbox').closest('div')!;
      await act(() => userEvent.click(containerEl));
      expect(result.getByRole('option', { name: withRegExp(RED_OPTION.label) })).toHaveFocus();
    });

    it('focuses on input field on clicking on them', async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
        />,
      );
      await act(() => userEvent.click(result.getByTestId('chips-input')));
      expect(result.getByTestId('chips-input')).toHaveFocus();
    });

    it('focuses on chip after clicking on them', async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
        />,
      );
      const chipLocator = result.getByRole('option', { name: withRegExp(RED_OPTION.label) });
      await act(() => userEvent.click(chipLocator));
      expect(chipLocator).toHaveFocus();
    });

    it('focuses to last chip when pressing {Backspace} in input field', async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION]}
          inputValue="0"
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
        />,
      );
      const chipsInputLocator = result.getByTestId('chips-input');

      await act(() => userEvent.type(chipsInputLocator, '{Backspace}'));
      expect(chipsInputLocator).toHaveFocus();

      await act(() => userEvent.type(chipsInputLocator, '{Backspace}'));
      expect(chipsInputLocator.previousSibling).toHaveFocus();
    });

    it('navigates between chips with arrow buttons (it should be cycle)', async () => {
      const value = [RED_OPTION, BLUE_OPTION, YELLOW_OPTION];
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION, BLUE_OPTION, YELLOW_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
        />,
      );
      const [chipRedLocator, chipBlueLocator, chipYellowLocator] = value.map(({ label }) =>
        result.getByRole('option', { name: withRegExp(label) }),
      );

      await act(() => userEvent.type(chipRedLocator, '{ArrowRight}'));
      expect(chipBlueLocator).toHaveFocus();

      await act(() => userEvent.type(chipBlueLocator, '{ArrowRight}'));
      expect(chipYellowLocator).toHaveFocus();

      await act(() => userEvent.type(chipYellowLocator, '{ArrowRight}'));
      expect(chipRedLocator).toHaveFocus();

      await act(() => userEvent.type(chipRedLocator, '{ArrowLeft}'));
      expect(chipYellowLocator).toHaveFocus();

      await act(() => userEvent.type(chipYellowLocator, '{ArrowLeft}'));
      expect(chipBlueLocator).toHaveFocus();

      await act(() => userEvent.type(chipBlueLocator, '{ArrowRight}'));
      expect(chipYellowLocator).toHaveFocus();
    });

    it('navigates with {Tab}', async () => {
      const value = [RED_OPTION, BLUE_OPTION, YELLOW_OPTION];
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION, BLUE_OPTION, YELLOW_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
        />,
      );
      const chipsInputLocator = result.getByTestId('chips-input');
      const [chipRedLocator, chipBlueLocator] = value.map(({ label }) =>
        result.getByRole('option', { name: withRegExp(label) }),
      );

      await act(() => userEvent.tab());
      expect(chipRedLocator).toHaveFocus();

      await act(() => userEvent.tab());
      expect(chipsInputLocator).toHaveFocus();

      await act(() => userEvent.tab({ shift: true }));
      expect(chipRedLocator).toHaveFocus();

      await act(() => userEvent.type(chipRedLocator, '{ArrowRight}'));
      expect(chipBlueLocator).toHaveFocus();

      await act(() => userEvent.tab());
      expect(chipsInputLocator).toHaveFocus();

      await act(() => userEvent.tab({ shift: true }));
      expect(chipBlueLocator).toHaveFocus();

      await act(() => userEvent.tab({ shift: true }));
      expect(document.body).toHaveFocus();

      await act(() => userEvent.tab());
      expect(chipBlueLocator).toHaveFocus();
    });

    it.each([
      { value: [RED_OPTION], description: 'input field' },
      { value: [RED_OPTION, BLUE_OPTION, YELLOW_OPTION], description: 'next chip' },
      { value: [YELLOW_OPTION, RED_OPTION, BLUE_OPTION], description: 'next chip (last)' },
      { value: [YELLOW_OPTION, BLUE_OPTION, RED_OPTION], description: 'prev chip' },
    ])('focuses on $description after remove chip', async ({ value }) => {
      const result = render(
        <ChipsInputBaseTest
          value={value}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
        />,
      );
      const chipRedLocator = result.getByRole('option', { name: withRegExp(RED_OPTION.label) });
      await act(() => userEvent.type(chipRedLocator, '{Delete}'));
      const nextLocatorWithFocus =
        value.length <= 1
          ? result.getByTestId('chips-input')
          : result.getByRole('option', { name: withRegExp(BLUE_OPTION.label) });
      expect(nextLocatorWithFocus).toHaveFocus();
    });
  });

  it.each([{ readOnly: false }, { readOnly: true }])(
    'calls user events (`readOnly` prop is `$readOnly`)',
    async ({ readOnly }) => {
      const onBlur = jest.fn();
      render(
        <ChipsInputBaseTest
          readOnly={readOnly}
          value={[]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onBlur={onBlur}
        />,
      );

      await act(() => userEvent.tab());
      await act(() => userEvent.tab({ shift: true }));

      expect(onBlur).toHaveBeenCalled();
    },
  );
});
