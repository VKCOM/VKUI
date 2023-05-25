import * as React from 'react';
import { fireEvent, queryByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent, waitForFloatingPosition } from '../../testing/utils';
import { ChipOption } from '../Chip/Chip';
import { ChipsSelect, ChipsSelectProps } from './ChipsSelect';

const ChipsSelectTest = (props: ChipsSelectProps<ChipOption>) => (
  <ChipsSelect data-testid="chips-select" {...props} />
);
// const redChip = () => screen.queryByText('Красный');
const getChipsSelect = () => screen.getByTestId('chips-select');

const colors: ChipOption[] = [
  { value: 'red', label: 'Красный' },
  { value: 'blue', label: 'Синий' },
  { value: 'navarin', label: 'Наваринского пламени с дымом' },
];
const toggleDropdown = async () => {
  userEvent.click(screen.getByRole('textbox'));
  await waitForFloatingPosition();
};
// получить опцию из дропдауна (не чип)
const queryListOption = (o: ChipOption | null | undefined) => {
  const list = document.querySelector<HTMLElement>('.vkuiInternalCustomSelectDropdown');
  return list ? queryByText(list, o?.label as string) : null;
};

describe('ChipsSelect', () => {
  baselineComponent(ChipsSelect);

  it('renders empty text', async () => {
    render(<ChipsSelect options={[]} value={[]} emptyText="__empty__" />);
    await toggleDropdown();
    expect(screen.queryByText('__empty__')).toBeTruthy();
  });

  it('filters options', async () => {
    render(<ChipsSelect options={colors} value={[]} />);
    userEvent.type(screen.getByRole('textbox'), colors[1]?.label?.substring(0, 3) as string);
    await toggleDropdown();
    expect(queryListOption(colors[1])).toBeTruthy();
    expect(screen.queryAllByRole('option')).toHaveLength(1);
  });

  it('shows spinner if fetching', async () => {
    render(<ChipsSelect fetching value={[]} />);
    await toggleDropdown();
    expect(screen.queryByRole('status')).toBeTruthy();
  });

  describe('controls dropdown', () => {
    it.each(['click', 'focus'])('opens options on %s', async (e) => {
      render(<ChipsSelect options={colors} value={[]} />);
      e === 'focus' ? fireEvent.focus(screen.getByRole('textbox')) : await toggleDropdown();
      await toggleDropdown();
      expect(screen.getAllByRole('option')[0]).toBeTruthy();
    });
    it('closes options on click outside', async () => {
      render(<ChipsSelect options={colors} value={[]} />);
      await toggleDropdown();
      userEvent.click(document.body);
      expect(screen.queryByRole('option')).toBeNull();
    });
    it('closes options after select', async () => {
      render(<ChipsSelect options={colors} value={[]} />);
      await toggleDropdown();
      userEvent.click(queryListOption(colors[0]) as Element);
      expect(queryListOption(colors[1])).toBeNull();
    });
    it('closes options on esc', async () => {
      render(<ChipsSelect options={colors} value={[]} />);
      await toggleDropdown();
      userEvent.type(screen.getByRole('textbox'), '{esc}');
      expect(queryListOption(colors[1])).toBeNull();
    });
  });

  describe('selects', () => {
    it('on click', async () => {
      let value;
      render(<ChipsSelect options={colors} onChange={(e) => (value = e)} value={[]} />);
      await toggleDropdown();
      userEvent.click(queryListOption(colors[0]) as Element);
      expect(value).toEqual([colors[0]]);
    });

    it('via keyboard', async () => {
      let value;
      const options = new Array(20).fill(0).map((_, i) => ({ value: i, label: `Option #${i}` }));

      render(<ChipsSelectTest value={[]} options={options} onChange={(e) => (value = e)} />);
      await toggleDropdown();

      // Focus on first element
      userEvent.keyboard('{arrowdown}');

      const idx = 7;
      for (let i = 0; i < idx; i++) {
        userEvent.keyboard('{arrowdown}');
      }
      userEvent.keyboard('{enter}');

      expect(queryListOption(options[idx])).toBeNull();
      expect(value).toEqual([options[idx]]);
    });
    it('hides selected option from list', async () => {
      render(<ChipsSelect options={colors} value={[colors[0]]} />);
      await toggleDropdown();
      expect(queryListOption(colors[0])).toBeNull();
    });
    it('deselects on chip click', () => {
      let value;
      render(<ChipsSelect options={colors} value={[colors[0]]} onChange={(e) => (value = e)} />);
      userEvent.click(screen.getByLabelText(`Удалить ${colors[0].label}`));
      expect(value).toEqual([]);
    });
  });

  it('does not focus ChipsSelect on chip click', () => {
    let selectedColors: ChipOption[] = [{ value: 'red', label: 'Красный' }];
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

    render(<ChipsSelectTest {...colorsChipsProps} />);

    const redChipRemove = screen.getByLabelText('Удалить Красный');

    userEvent.click(redChipRemove);
    expect(getChipsSelect()).not.toHaveFocus();
  });
});
