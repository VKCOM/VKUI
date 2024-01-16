import * as React from 'react';
import { act, fireEvent, render, within } from '@testing-library/react';
import { getTextFromChildren } from '../../lib/children';
import {
  baselineComponent,
  userEvent,
  waitForFloatingPosition,
  withRegExp,
} from '../../testing/utils';
import type { ChipOption } from '../ChipsInputBase/types';
import { ChipsSelect } from './ChipsSelect';

const FIRST_OPTION = { value: 'red', label: 'Красный' };

const SECOND_OPTION = { value: 'blue', label: 'Синий' };

const THIRD_OPTION = { value: 'navarin', label: 'Наваринского пламени с дымом' };

const colors: ChipOption[] = [FIRST_OPTION, SECOND_OPTION, THIRD_OPTION];

const testValue = { value: 'testvalue', label: 'testvalue' };

describe('ChipsSelect', () => {
  baselineComponent(ChipsSelect, { a11y: false });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });
  });

  it('renders empty text', async () => {
    const result = render(<ChipsSelect options={[]} defaultValue={[]} emptyText="__empty__" />);
    await userEvent.click(result.getByRole('combobox'));
    await waitForFloatingPosition();
    expect(result.queryByText('__empty__')).toBeTruthy();
  });

  it('filters options', async () => {
    const result = render(
      <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" />,
    );
    const inputEl = result.getByRole('combobox');
    await userEvent.type(inputEl, 'Син');
    await waitForFloatingPosition();
    await userEvent.click(inputEl);
    expect(within(result.getByTestId('dropdown')).getAllByRole('option')).toHaveLength(1);
    expect(result.getByRole('option', { name: 'Синий' })).toBeTruthy();
  });

  it('shows spinner if fetching', async () => {
    const result = render(<ChipsSelect fetching defaultValue={[]} />);
    await userEvent.click(result.getByRole('combobox'));
    await waitForFloatingPosition();
    expect(result.queryByRole('status')).toBeTruthy();
  });

  describe('controls dropdown', () => {
    it.each(['click', 'focus'])('opens options on %s', async (eventType) => {
      const result = render(<ChipsSelect options={colors} defaultValue={[]} />);
      if (eventType === 'focus') {
        fireEvent.focus(result.getByRole('combobox'));
      }
      await userEvent.click(result.getByRole('combobox'));
      await waitForFloatingPosition();
      expect(result.getAllByRole('option')[0]).toBeTruthy();
    });

    it('closes options on click outside', async () => {
      const result = render(
        <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" />,
      );
      await userEvent.click(result.getByRole('combobox'));
      await waitForFloatingPosition();
      expect(result.getByTestId('dropdown')).not.toBeNull();
      await userEvent.click(document.body);
      expect(() => result.getByTestId('dropdown')).toThrow();
    });

    it('closes options after select', async () => {
      const result = render(
        <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" />,
      );
      await userEvent.click(result.getByRole('combobox'));
      await waitForFloatingPosition();
      await userEvent.click(
        within(result.getByTestId('dropdown')).getByRole('option', {
          name: getTextFromChildren(FIRST_OPTION.label),
        }),
      );
      expect(() => result.getByTestId('dropdown')).toThrow();
    });

    it('does not close options after select with selectedBehavior and closeAfterSelect={false}', async () => {
      const result = render(
        <ChipsSelect
          options={colors}
          defaultValue={[]}
          selectedBehavior="highlight"
          closeAfterSelect={false}
          dropdownTestId="dropdown"
        />,
      );
      await userEvent.click(result.getByRole('combobox'));
      await waitForFloatingPosition();
      await userEvent.click(
        within(result.getByTestId('dropdown')).getByRole('option', {
          name: getTextFromChildren(FIRST_OPTION.label),
        }),
      );
      expect(() => result.getByTestId('dropdown')).toBeTruthy();
    });

    it('closes options on esc', async () => {
      const result = render(
        <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" />,
      );
      await userEvent.click(result.getByRole('combobox'));
      await waitForFloatingPosition();
      await userEvent.type(result.getByRole('combobox'), '{Escape}');
      expect(() => result.getByTestId('dropdown')).toThrow();
    });
  });

  describe('selects', () => {
    it('on click', async () => {
      const onChange = jest.fn();
      const result = render(
        <ChipsSelect
          options={colors}
          onChange={onChange}
          defaultValue={[]}
          dropdownTestId="dropdown"
        />,
      );
      await userEvent.click(result.getByRole('combobox'));
      await waitForFloatingPosition();
      await userEvent.click(
        within(result.getByTestId('dropdown')).getByRole('option', {
          name: getTextFromChildren(FIRST_OPTION.label),
        }),
      );
      expect(onChange).toHaveBeenCalledWith([FIRST_OPTION]);
    });

    it('via keyboard', async () => {
      const onChange = jest.fn();
      const options = new Array(20).fill(0).map((_, i) => ({ value: i, label: `Option #${i}` }));
      const result = render(
        <ChipsSelect value={[]} options={options} onChange={onChange} dropdownTestId="dropdown" />,
      );

      await userEvent.click(result.getByRole('combobox'));
      await waitForFloatingPosition();
      const dropdown = result.getByTestId('dropdown');

      // Focus on first element
      await userEvent.keyboard('{arrowdown}');

      const idx = 7;
      for (let i = 0; i < idx; i++) {
        await userEvent.keyboard('{arrowdown}');
      }
      await userEvent.keyboard('{enter}');

      expect(within(dropdown).getByRole('option', { name: options[idx].label })).toBeTruthy();
      expect(onChange).toHaveBeenCalledWith([options[idx]]);
    });

    it('does not hide selected option from list', async () => {
      const result = render(
        <ChipsSelect
          options={colors}
          defaultValue={[FIRST_OPTION]}
          selectedBehavior="highlight"
          dropdownTestId="dropdown"
        />,
      );
      await userEvent.click(result.getByRole('combobox'));
      await waitForFloatingPosition();
      expect(
        within(result.getByTestId('dropdown')).getByRole('option', {
          name: getTextFromChildren(FIRST_OPTION.label),
        }),
      ).toBeTruthy();
    });

    it('hides selected option from list', async () => {
      const result = render(
        <ChipsSelect
          options={colors}
          defaultValue={[FIRST_OPTION]}
          selectedBehavior="hide"
          dropdownTestId="dropdown"
        />,
      );
      await userEvent.click(result.getByRole('combobox'));
      await waitForFloatingPosition();
      expect(() =>
        within(result.getByTestId('dropdown')).getByRole('option', {
          name: getTextFromChildren(FIRST_OPTION.label),
        }),
      ).toThrow();
    });
    it('deselects on chip click', async () => {
      const handleChange = jest.fn();
      const result = render(
        <ChipsSelect options={colors} value={[FIRST_OPTION]} onChange={handleChange} />,
      );
      await userEvent.click(result.getByText(`Удалить ${FIRST_OPTION.label}`).closest('button')!);
      expect(handleChange).toHaveBeenCalledWith([]);
    });
  });

  it('does not focus ChipsSelect on chip click', async () => {
    let selectedColors: ChipOption[] = [FIRST_OPTION, SECOND_OPTION];
    const setSelectedColors = (updatedColors: ChipOption[]) => {
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

    const result = render(<ChipsSelect data-testid="chips-select" {...colorsChipsProps} />);
    const chipEl = result.getByRole('option', { name: withRegExp(FIRST_OPTION.label) });
    await userEvent.click(within(chipEl).getByRole('button'));
    expect(result.getByTestId('chips-select')).not.toHaveFocus();
  });

  describe('addOnBlur prop', () => {
    it('add value on blur event if creatable=true', async () => {
      let value;
      const result = render(
        <ChipsSelect
          options={colors}
          value={[]}
          onChange={(e) => (value = e)}
          creatable
          addOnBlur
        />,
      );
      await userEvent.type(result.getByRole('combobox'), testValue.label);
      await waitForFloatingPosition();
      await userEvent.click(document.body);
      expect(value).toEqual([testValue]);
    });

    it('does not add value on blur event if creatable=false', async () => {
      const onChange = jest.fn();
      const result = render(
        <ChipsSelect options={colors} value={[]} onChange={onChange} creatable={false} addOnBlur />,
      );
      await userEvent.type(result.getByRole('combobox'), testValue.label);
      await waitForFloatingPosition();
      await userEvent.click(document.body);
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
