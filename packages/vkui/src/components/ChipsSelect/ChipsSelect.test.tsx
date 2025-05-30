import { fireEvent, render, screen, within } from '@testing-library/react';
import type { Placement, useFloating } from '../../lib/floating';
import {
  baselineComponent,
  fakeTimers,
  userEvent,
  waitForFloatingPosition,
  withRegExp,
} from '../../testing/utils';
import type { ChipOption } from '../ChipsInputBase/types';
import { ChipsSelect } from './ChipsSelect';
import styles from './ChipsSelect.module.css';

const FIRST_OPTION = { value: 'red', label: 'Красный' };

const SECOND_OPTION = { value: 'blue', label: 'Синий' };

const THIRD_OPTION = { value: 'navarin', label: 'Наваринского пламени с дымом' };

const colors: ChipOption[] = [FIRST_OPTION, SECOND_OPTION, THIRD_OPTION];

let placementStub: Placement | undefined = undefined;
jest.mock('../../lib/floating', () => {
  const originalModule = jest.requireActual('../../lib/floating');
  return {
    ...originalModule,
    useFloating: (...args: Parameters<typeof useFloating>) => {
      const result = originalModule['useFloating'](args);
      return {
        ...result,
        get placement() {
          return placementStub ?? result.placement;
        },
      };
    },
  };
});

describe('ChipsSelect', () => {
  afterEach(() => {
    placementStub = undefined;
  });
  baselineComponent((props) => (
    <>
      <label htmlFor="chips">Chips Input</label>
      <ChipsSelect id="chips" {...props} chipsListLabel="Выбранные опции" />
    </>
  ));

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
    await userEvent.click(result.getByRole('combobox'));
    await waitForFloatingPosition();
    const dropdownLocator = result.getByTestId('dropdown');
    expect(within(dropdownLocator).queryByText('__empty__')).toBeTruthy();
  });

  it('filters options', async () => {
    const result = render(
      <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" />,
    );
    await userEvent.type(result.getByRole('combobox'), 'Син');
    await waitForFloatingPosition();
    const dropdownLocator = result.getByTestId('dropdown');
    expect(within(dropdownLocator).getAllByRole('option')).toHaveLength(1);
    expect(within(dropdownLocator).getByRole('option', { name: 'Синий' })).toBeTruthy();
  });

  it('should sort options by sortFn prop', async () => {
    type Option = { label: string; value: number };
    const options: Option[] = [
      { label: '1', value: 1 },
      { label: '3', value: 3 },
      { label: '2', value: 2 },
    ];
    const byAsc = (a: Option, b: Option) => a.label.localeCompare(b.label);
    const byDesc = (a: Option, b: Option) => b.label.localeCompare(a.label);

    const checkOptionsOrder = async (order: string[]) => {
      await userEvent.click(screen.getByRole('combobox'));
      const dropdownLocator = screen.getByTestId('dropdown');
      const optionsValues = within(dropdownLocator)
        .getAllByRole('option')
        .map((element) => element.textContent);
      expect(optionsValues).toEqual(order);
    };

    // Сортируем по возрастанию
    const { rerender } = render(
      <ChipsSelect options={options} defaultValue={[]} sortFn={byAsc} dropdownTestId="dropdown" />,
    );
    await checkOptionsOrder(['1', '2', '3']);

    // Сортируем по убыванию
    rerender(
      <ChipsSelect options={options} defaultValue={[]} sortFn={byDesc} dropdownTestId="dropdown" />,
    );
    await checkOptionsOrder(['3', '2', '1']);
  });

  it('shows spinner if fetching', async () => {
    const result = render(<ChipsSelect fetching defaultValue={[]} dropdownTestId="dropdown" />);
    await userEvent.click(result.getByRole('combobox'));
    await waitForFloatingPosition();
    const dropdownLocator = result.getByTestId('dropdown');
    expect(within(dropdownLocator).getByRole('status')).toBeTruthy();
  });

  it.each(['click', 'focus'])('opens dropdown when %s on input field', async (eventType) => {
    const onOpen = jest.fn();
    const result = render(
      <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" onOpen={onOpen} />,
    );
    const inputLocator = result.getByRole('combobox');
    if (eventType === 'focus') {
      await userEvent.tab();
    } else {
      await userEvent.click(inputLocator);
    }
    await waitForFloatingPosition();
    const dropdownLocator = result.getByTestId('dropdown');
    expect(within(dropdownLocator).getAllByRole('option')).toHaveLength(colors.length);
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it('closes options on click outside', async () => {
    const onClose = jest.fn();
    const result = render(
      <ChipsSelect
        options={colors}
        defaultValue={[]}
        dropdownTestId="dropdown"
        onClose={onClose}
      />,
    );
    await userEvent.click(result.getByRole('combobox'));
    await waitForFloatingPosition();
    expect(result.getByTestId('dropdown')).toBeTruthy();
    await userEvent.click(document.body);
    expect(() => result.getByTestId('dropdown')).toThrow();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should check custom fields when onChange', async () => {
    const onChange = jest.fn();
    const options = colors.map((color, index) => ({
      ...color,
      custom: index.toString(),
    }));

    const result = render(
      <ChipsSelect
        options={options}
        defaultValue={[]}
        onChange={onChange}
        dropdownTestId="dropdown"
      />,
    );
    const inputLocator = result.getByRole('combobox');
    await userEvent.click(inputLocator);
    await waitForFloatingPosition();

    const dropdownOption = within(result.getByTestId('dropdown')).getByRole('option', {
      name: withRegExp(FIRST_OPTION.label),
    });
    await userEvent.hover(dropdownOption); // для вызова onDropdownMouseLeave
    await userEvent.hover(inputLocator);
    await userEvent.click(dropdownOption);

    result.rerender(
      <ChipsSelect
        value={[{ ...FIRST_OPTION, custom: '0' }]}
        options={options}
        onChange={onChange}
        dropdownTestId="dropdown"
      />,
    );
    expect(
      result.getByRole('option', {
        name: withRegExp(FIRST_OPTION.label),
      }),
    ).toBeTruthy();
    expect(onChange).toHaveBeenCalledWith([{ ...FIRST_OPTION, custom: '0' }]);
  });

  it.each(['{ArrowDown}', 'typing text'])(
    'closes dropdown on {Escape} and open when %s',
    async (type) => {
      const onOpen = jest.fn();
      const onClose = jest.fn();
      const result = render(
        <ChipsSelect
          options={colors}
          defaultValue={[]}
          dropdownTestId="dropdown"
          onOpen={onOpen}
          onClose={onClose}
        />,
      );
      const inputLocator = result.getByRole('combobox');
      await userEvent.click(inputLocator);

      await waitForFloatingPosition();
      expect(onOpen).toHaveBeenCalledTimes(1);
      await userEvent.type(inputLocator, '{Escape}');
      expect(onClose).toHaveBeenCalledTimes(1);
      await userEvent.type(inputLocator, '{Enter}'); // если dropdown'а пока нет, то выбор из списка на {Enter} должно игнорироваться (см. в коде `case Keys.ENTER`)
      expect(() => result.getByTestId('dropdown')).toThrow();
      expect(onOpen).toHaveBeenCalledTimes(1);

      await userEvent.type(inputLocator, type);
      await waitForFloatingPosition();
      expect(result.getByTestId('dropdown')).toBeTruthy();
      expect(onOpen).toHaveBeenCalledTimes(2);
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
    await userEvent.click(result.getByRole('combobox'));
    await waitForFloatingPosition();
    await userEvent.click(
      within(result.getByTestId('dropdown')).getByRole('option', {
        name: withRegExp(FIRST_OPTION.label),
      }),
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

      await userEvent.click(result.getByRole('combobox'));
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
    await userEvent.click(inputLocator);
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

    await userEvent.type(inputLocator, '{ArrowDown}');
    expect(firstOptionLocator).toHaveAttribute('data-hovered', 'true');

    await userEvent.type(inputLocator, '{ArrowUp}');
    expect(thirdOptionLocator).toHaveAttribute('data-hovered', 'true');

    await userEvent.type(inputLocator, '{ArrowDown}');
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
    await userEvent.click(inputLocator);
    await waitForFloatingPosition();

    const dropdownOption = within(result.getByTestId('dropdown')).getByRole('option', {
      name: withRegExp(FIRST_OPTION.label),
    });
    await userEvent.hover(dropdownOption); // для вызова onDropdownMouseLeave
    await userEvent.hover(inputLocator);
    await userEvent.click(dropdownOption);

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
    await userEvent.click(inputLocator);
    await waitForFloatingPosition();

    const targetOptionIndex = 7;
    await userEvent.type(inputLocator, '{ArrowDown}');
    for (let i = 0; i < targetOptionIndex; i += 1) {
      await userEvent.type(inputLocator, '{ArrowDown}');
    }
    await userEvent.type(inputLocator, '{Enter}');

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
    await userEvent.click(chipEl);
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
      await userEvent.type(inputLocator, customChip.label);
      await userEvent.type(inputLocator, '{Enter}');
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
      await userEvent.type(inputLocator, customChip.label);
      await waitForFloatingPosition();
      await userEvent.click(
        within(result.getByTestId('dropdown')).getByRole('option', {
          name: withRegExp('Добавить новую опцию'),
        }),
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

        await userEvent.type(result.getByRole('combobox'), customChip.label);
        await waitForFloatingPosition();
        await userEvent.click(document.body);

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

      await userEvent.tab();
      await waitForFloatingPosition();
      await userEvent.type(inputLocator, '{ArrowUp}');
      await userEvent.tab({ shift: true });

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

  it('should render wrapper to dropdown content with renderDropdown', () => {
    render(
      <ChipsSelect
        options={[FIRST_OPTION, SECOND_OPTION, THIRD_OPTION]}
        dropdownTestId="dropdown"
        renderDropdown={({ defaultDropdownContent }) => {
          return <div data-testid="wrapper">{defaultDropdownContent}</div>;
        }}
      />,
    );
    const inputLocator = screen.getByRole('combobox');
    fireEvent.click(inputLocator);
    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
  });

  it('checks ChipsSelect placement class for borders when dropdown is opened and closed during  placement change', async () => {
    const component = render(<ChipsSelect options={[FIRST_OPTION, SECOND_OPTION, THIRD_OPTION]} />);
    fireEvent.click(screen.getByRole('combobox'));
    await waitForFloatingPosition();

    // dropdown по умолчанию открыт вниз и класс для границ выставлен верно
    expect(document.querySelector(`.${styles.popDown}`)).not.toBeNull();

    // меняем позиционирование дропдауна вверх
    placementStub = 'top';
    component.rerender(<ChipsSelect options={[FIRST_OPTION, SECOND_OPTION, THIRD_OPTION]} />);

    // dropdown открыт вверх и класс для границ выставлен верно
    expect(document.querySelector(`.${styles.popUp}`)).not.toBeNull();

    // закрываем дропдаун и меняем позиционирование вниз
    await userEvent.click(document.body);
    placementStub = 'bottom';
    component.rerender(<ChipsSelect options={[FIRST_OPTION, SECOND_OPTION, THIRD_OPTION]} />);

    // снова открываем дропдаун
    // в этот момент внутренне состояние placement CustomSelect указывает вверх
    // но floating-ui возвращает "bottom", а значит и внутренне состояние и
    // границы CustomSelect должны быть выставлены соответственно вниз
    fireEvent.click(screen.getByRole('combobox'));
    await waitForFloatingPosition();

    // дропдаун открыт вниз и класс для границ выставлен верно
    expect(document.querySelector(`.${styles.popDown}`)).not.toBeNull();
  });

  it('check close dropdown when click to dropdown icon', async () => {
    const result = render(
      <ChipsSelect creatable="Добавить новую опцию" options={[]} dropdownTestId="dropdown" />,
    );
    const getDropdownIcon = () => result.container.getElementsByClassName(styles.dropdownIcon)[0];
    expect(screen.queryByTestId('dropdown')).toBeFalsy();
    fireEvent.click(getDropdownIcon());
    await waitForFloatingPosition();
    expect(screen.queryByTestId('dropdown')).toBeTruthy();
    fireEvent.click(getDropdownIcon());
    expect(screen.queryByTestId('dropdown')).toBeFalsy();
  });

  it('should add some options by splitting by delimiter when creatable', async () => {
    const onChange = jest.fn();
    render(
      <ChipsSelect
        options={[]}
        defaultValue={[]}
        data-testid="input"
        onChange={onChange}
        delimiter=","
        creatable
      />,
    );
    fireEvent.input(screen.getByTestId('input'), { target: { value: 'Зеленый,Фиолетовый' } });
    expect(onChange).toBeCalledWith([
      {
        value: 'Зеленый',
        label: 'Зеленый',
      },
      {
        value: 'Фиолетовый',
        label: 'Фиолетовый',
      },
    ]);
    expect(screen.getByTestId<HTMLInputElement>('input').value).toBe('');
  });

  it('should not add some options by splitting by delimiter when not creatable', async () => {
    const onChange = jest.fn();
    render(
      <ChipsSelect
        options={[]}
        defaultValue={[]}
        data-testid="input"
        onChange={onChange}
        delimiter=","
      />,
    );
    fireEvent.input(screen.getByTestId('input'), { target: { value: 'Зеленый,Фиолетовый' } });
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByTestId<HTMLInputElement>('input').value).toBe('Зеленый,Фиолетовый');
  });
});
