import * as React from 'react';
import { act, render, within } from '@testing-library/react';
import {
  baselineComponent,
  fakeTimers,
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

describe('ChipsSelect', () => {
  baselineComponent(ChipsSelect, { a11y: false });

  fakeTimers();

  it('renders empty text', async () => {
    const result = render(
      <ChipsSelect
        options={[]}
        defaultValue={[]}
        dropdownTestId="dropdown"
        emptyText="__empty__"
      />,
    );
    await act(() => userEvent.click(result.getByRole('combobox')));
    await waitForFloatingPosition();
    const dropdownLocator = result.getByTestId('dropdown');
    expect(within(dropdownLocator).queryByText('__empty__')).toBeTruthy();
  });

  it('filters options', async () => {
    const result = render(
      <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" />,
    );
    await act(() => userEvent.type(result.getByRole('combobox'), 'Син'));
    await waitForFloatingPosition();
    const dropdownLocator = result.getByTestId('dropdown');
    expect(within(dropdownLocator).getAllByRole('option')).toHaveLength(1);
    expect(within(dropdownLocator).getByRole('option', { name: 'Синий' })).toBeTruthy();
  });

  it('shows spinner if fetching', async () => {
    const result = render(<ChipsSelect fetching defaultValue={[]} dropdownTestId="dropdown" />);
    await act(() => userEvent.click(result.getByRole('combobox')));
    await waitForFloatingPosition();
    const dropdownLocator = result.getByTestId('dropdown');
    expect(within(dropdownLocator).getByRole('status')).toBeTruthy();
  });

  it.each(['click', 'focus'])('opens dropdown when %s on input field', async (eventType) => {
    const result = render(
      <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" />,
    );
    const inputLocator = result.getByRole('combobox');
    if (eventType === 'focus') {
      await act(() => userEvent.tab());
    } else {
      await act(() => userEvent.click(inputLocator));
    }
    await waitForFloatingPosition();
    const dropdownLocator = result.getByTestId('dropdown');
    expect(within(dropdownLocator).getAllByRole('option')).toHaveLength(colors.length);
  });

  it('closes options on click outside', async () => {
    const result = render(
      <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" />,
    );
    await act(() => userEvent.click(result.getByRole('combobox')));
    await waitForFloatingPosition();
    expect(result.getByTestId('dropdown')).toBeTruthy();
    await act(() => userEvent.click(document.body));
    expect(() => result.getByTestId('dropdown')).toThrow();
  });

  it.each(['{ArrowDown}', 'typing text'])(
    'closes dropdown on {Escape} and open when %s',
    async (type) => {
      const result = render(
        <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" />,
      );
      const inputLocator = result.getByRole('combobox');
      await act(() => userEvent.click(inputLocator));

      await waitForFloatingPosition();
      await act(() => userEvent.type(inputLocator, '{Escape}'));
      await act(() => userEvent.type(inputLocator, '{Enter}')); // если dropdown'а пока нет, то выбор из списка на {Enter} должно игнорироваться (см. в коде `case Keys.ENTER`
      expect(() => result.getByTestId('dropdown')).toThrow();

      await act(() => userEvent.type(inputLocator, type));
      await waitForFloatingPosition();
      expect(result.getByTestId('dropdown')).toBeTruthy();
    },
  );

  it.each([
    { closeAfterSelect: true, description: 'closes' },
    { closeAfterSelect: false, description: 'does not close' },
  ])('$description dropdown after select', async ({ closeAfterSelect }) => {
    const result = render(
      <ChipsSelect
        options={colors}
        defaultValue={[]}
        dropdownTestId="dropdown"
        closeAfterSelect={closeAfterSelect}
      />,
    );
    await act(() => userEvent.click(result.getByRole('combobox')));
    await waitForFloatingPosition();
    await act(() =>
      userEvent.click(
        within(result.getByTestId('dropdown')).getByRole('option', {
          name: withRegExp(FIRST_OPTION.label),
        }),
      ),
    );
    if (closeAfterSelect) {
      expect(() => result.getByTestId('dropdown')).toThrow();
    } else {
      expect(result.getByTestId('dropdown')).toBeTruthy();
    }
  });

  it.each([
    { selectedBehavior: 'highlight' as const, description: 'hides' },
    { selectedBehavior: 'hide' as const, description: 'does not hide' },
  ])(
    '$description selected option if `selectedBehavior` is `"$selectedBehavior"`',
    async ({ selectedBehavior }) => {
      const result = render(
        <ChipsSelect
          options={colors}
          defaultValue={[FIRST_OPTION]}
          selectedBehavior={selectedBehavior}
          dropdownTestId="dropdown"
        />,
      );

      await act(() => userEvent.click(result.getByRole('combobox')));
      await waitForFloatingPosition();

      const getFirstOption = () => {
        within(result.getByTestId('dropdown')).getByRole('option', {
          name: withRegExp(FIRST_OPTION.label),
        });
      };

      if (selectedBehavior === 'highlight') {
        expect(getFirstOption).toBeTruthy();
      } else {
        expect(getFirstOption).toThrow();
      }
    },
  );

  it('should cycle navigates with {ArrowUp} and {ArrowDown}', async () => {
    const result = render(
      <ChipsSelect
        options={[FIRST_OPTION, SECOND_OPTION, THIRD_OPTION]}
        dropdownTestId="dropdown"
      />,
    );

    const inputLocator = result.getByRole('combobox');
    await act(() => userEvent.click(inputLocator));
    await waitForFloatingPosition();

    const boundDropdownLocator = within(result.getByTestId('dropdown'));
    const [firstOptionLocator, , thirdOptionLocator] = [
      boundDropdownLocator.getByRole('option', {
        name: withRegExp(FIRST_OPTION.label),
      }),
      boundDropdownLocator.getByRole('option', {
        name: withRegExp(SECOND_OPTION.label),
      }),
      boundDropdownLocator.getByRole('option', {
        name: withRegExp(THIRD_OPTION.label),
      }),
    ];

    await act(() => userEvent.type(inputLocator, '{ArrowDown}'));
    expect(firstOptionLocator).toHaveAttribute('data-hovered', 'true');

    await act(() => userEvent.type(inputLocator, '{ArrowUp}'));
    expect(thirdOptionLocator).toHaveAttribute('data-hovered', 'true');

    await act(() => userEvent.type(inputLocator, '{ArrowDown}'));
    expect(firstOptionLocator).toHaveAttribute('data-hovered', 'true');
  });

  it('adds chip from dropdown with click to option', async () => {
    const onChangeStart = jest.fn();
    const onChange = jest.fn();
    const result = render(
      <ChipsSelect
        value={[]}
        options={colors}
        onChangeStart={onChangeStart}
        onChange={onChange}
        dropdownTestId="dropdown"
      />,
    );

    const inputLocator = result.getByRole('combobox');
    await act(() => userEvent.click(inputLocator));
    await waitForFloatingPosition();

    const dropdownOption = within(result.getByTestId('dropdown')).getByRole('option', {
      name: withRegExp(FIRST_OPTION.label),
    });
    await act(() => userEvent.hover(dropdownOption)); // для вызова onDropdownMouseLeav
    await act(() => userEvent.hover(inputLocator));
    await act(() => userEvent.click(dropdownOption));

    result.rerender(
      <ChipsSelect
        value={[FIRST_OPTION]}
        options={colors}
        onChangeStart={onChangeStart}
        onChange={onChange}
        dropdownTestId="dropdown"
      />,
    );
    expect(
      result.getByRole('option', {
        name: withRegExp(FIRST_OPTION.label),
      }),
    ).toBeTruthy();
    expect(onChangeStart).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith([FIRST_OPTION]);
  });

  it('adds chip from dropdown with {Enter} to option', async () => {
    const onChangeStart = jest.fn();
    const onChange = jest.fn();
    const options = new Array(20).fill(0).map((_, i) => ({ value: i, label: `Option #${i}` }));
    const result = render(
      <ChipsSelect
        value={[]}
        options={options}
        onChangeStart={onChangeStart}
        onChange={onChange}
      />,
    );

    const inputLocator = result.getByRole('combobox');
    await act(() => userEvent.click(inputLocator));
    await waitForFloatingPosition();

    const targetOptionIndex = 7;
    await act(() => userEvent.type(inputLocator, '{ArrowDown}'));
    for (let i = 0; i < targetOptionIndex; i += 1) {
      await act(() => userEvent.type(inputLocator, '{ArrowDown}'));
    }
    await act(() => userEvent.type(inputLocator, '{Enter}'));

    const selectedOption = options[targetOptionIndex];
    result.rerender(
      <ChipsSelect
        value={[options[targetOptionIndex]]}
        options={options}
        onChangeStart={onChangeStart}
        onChange={onChange}
      />,
    );
    expect(
      result.getByRole('option', {
        name: withRegExp(selectedOption.label),
      }),
    ).toBeTruthy();
    expect(onChangeStart).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith([selectedOption]);
  });

  it('does not focus input field on chip click', async () => {
    const result = render(
      <ChipsSelect defaultValue={[FIRST_OPTION, SECOND_OPTION]} options={colors} />,
    );
    const chipEl = result.getByRole('option', { name: withRegExp(FIRST_OPTION.label) });
    await act(() => userEvent.click(chipEl));
    expect(result.getByRole('combobox')).not.toHaveFocus();
  });

  describe('creatable', () => {
    const customChip = { value: 'testvalue', label: 'testvalue' };

    it.each([
      { creatable: true, description: 'adds custom chip' },
      { creatable: false, description: 'does not add custom chip' },
    ])('$description by pressing {Enter}', async ({ creatable }) => {
      const onChange = jest.fn();
      const result = render(
        <ChipsSelect
          creatable={creatable}
          options={colors}
          defaultValue={[]}
          onChange={onChange}
        />,
      );
      const inputLocator = result.getByRole('combobox');
      await act(() => userEvent.type(inputLocator, customChip.label));
      await act(() => userEvent.type(inputLocator, '{Enter}'));
      if (creatable) {
        expect(onChange).toHaveBeenCalledWith([customChip]);
      } else {
        expect(onChange).not.toHaveBeenCalled();
      }
    });

    it('adds custom chip by add button in dropdown', async () => {
      const onChange = jest.fn();
      const result = render(
        <ChipsSelect
          creatable="Добавить новую опцию"
          options={colors}
          defaultValue={[]}
          onChange={onChange}
          dropdownTestId="dropdown"
        />,
      );
      const inputLocator = result.getByRole('combobox');
      await act(() => userEvent.type(inputLocator, customChip.label));
      await waitForFloatingPosition();
      await act(() =>
        userEvent.click(
          within(result.getByTestId('dropdown')).getByRole('option', {
            name: withRegExp('Добавить новую опцию'),
          }),
        ),
      );
      expect(onChange).toHaveBeenCalledWith([customChip]);
    });

    it.each([
      { creatable: true, description: 'adds custom chip' },
      { creatable: false, description: 'does not add custom chip' },
    ])(
      '$description when `addOnBlur` provided and `creatable` is $creatable',
      async ({ creatable }) => {
        const onChange = jest.fn();
        const result = render(
          <ChipsSelect
            creatable={creatable}
            addOnBlur
            options={colors}
            defaultValue={[]}
            onChange={onChange}
          />,
        );

        await act(() => userEvent.type(result.getByRole('combobox'), customChip.label));
        await waitForFloatingPosition();
        await act(() => userEvent.click(document.body));

        if (creatable) {
          expect(onChange).toHaveBeenCalledWith([customChip]);
        } else {
          expect(onChange).not.toHaveBeenCalledWith([]);
        }
      },
    );
  });

  it.each([{ readOnly: false }, { readOnly: true }])(
    'calls user events (`readOnly` prop is `$readOnly`)',
    async ({ readOnly }) => {
      const onFocus = jest.fn();
      const onBlur = jest.fn();
      const onKeyDown = jest.fn();
      const result = render(
        <ChipsSelect
          readOnly={readOnly}
          data-testid="input"
          options={colors}
          defaultValue={[]}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />,
      );

      const inputLocator = result.getByTestId('input');

      await act(() => userEvent.tab());
      await act(() => userEvent.type(inputLocator, '{ArrowUp}'));
      await act(() => userEvent.tab({ shift: true }));

      expect(onFocus).toHaveBeenCalled();
      expect(onBlur).toHaveBeenCalled();
      expect(onKeyDown).toHaveBeenCalled();
    },
  );

  it('should ignore disabled option', async () => {
    const onChange = jest.fn();
    const result = render(
      <ChipsSelect
        options={[FIRST_OPTION, { ...SECOND_OPTION, disabled: true }, THIRD_OPTION]}
        dropdownTestId="dropdown"
        onChange={onChange}
      />,
    );

    const inputLocator = result.getByRole('combobox');
    await userEvent.click(inputLocator);
    await waitForFloatingPosition();

    const boundDropdownLocator = within(result.getByTestId('dropdown'));
    const [firstOptionLocator, secondOptionLocator, thirdOptionLocator] = [
      boundDropdownLocator.getByRole('option', {
        name: withRegExp(FIRST_OPTION.label),
      }),
      boundDropdownLocator.getByRole('option', {
        name: withRegExp(SECOND_OPTION.label),
      }),
      boundDropdownLocator.getByRole('option', {
        name: withRegExp(THIRD_OPTION.label),
      }),
    ];

    await userEvent.hover(secondOptionLocator);
    await userEvent.hover(inputLocator);
    await userEvent.click(secondOptionLocator);

    expect(onChange).not.toHaveBeenCalled();
    await userEvent.type(inputLocator, '{ArrowDown}');
    expect(firstOptionLocator).toHaveAttribute('data-hovered', 'true');

    await userEvent.type(inputLocator, '{ArrowDown}');
    expect(thirdOptionLocator).toHaveAttribute('data-hovered', 'true');

    await userEvent.type(inputLocator, '{ArrowUp}');
    expect(firstOptionLocator).toHaveAttribute('data-hovered', 'true');
  });
});
