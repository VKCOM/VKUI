import { act, createRef } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import type { Placement, useFloating } from '../../lib/floating';
import {
  baselineComponent,
  fakeTimersForScope,
  userEvent,
  waitForFloatingPosition,
  withFakeTimers,
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
vi.mock('../../lib/floating', async () => {
  const originalModule = (await vi.importActual('../../lib/floating')) as any;
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

  it(
    'should work with slotProps',
    withFakeTimers(async () => {
      const rootRef1 = createRef<HTMLDivElement>();
      const rootRef2 = createRef<HTMLDivElement>();
      const inputRef1 = createRef<HTMLInputElement>();
      const inputRef2 = createRef<HTMLInputElement>();
      const onInputClick = vi.fn();
      const onRootClick1 = vi.fn();
      const onRootClick2 = vi.fn();
      const onInputChange1 = vi.fn();
      const onInputChange2 = vi.fn();

      render(
        <ChipsSelect
          value={[]}
          inputValue="input-value"
          onInputChange={onInputChange1}
          data-testid="input"
          className="rootClassName"
          id="input"
          getRootRef={rootRef1}
          getRef={inputRef1}
          onClick={onRootClick1}
          style={{
            backgroundColor: 'rgb(255, 0, 0)',
          }}
          slotProps={{
            root: {
              'data-testid': 'root',
              'className': 'rootClassName-2',
              'style': {
                color: 'rgb(255, 0, 0)',
              },
              'getRootRef': rootRef2,
              'onClick': onRootClick2,
            },
            input: {
              'className': 'inputClassName',
              'getRootRef': inputRef2,
              'data-testid': 'input-2',
              'onClick': onInputClick,
              'value': 'input-value-2',
              'onChange': onInputChange2,
            },
          }}
        />,
      );

      expect(screen.queryByTestId('input')).not.toBeInTheDocument();
      const input = screen.getByTestId('input-2');
      expect(input).toBeInTheDocument();
      expect(input).toHaveClass('inputClassName');
      expect(input).toHaveValue('input-value-2');
      expect(input).toHaveAttribute('id', 'input');

      const root = screen.getByTestId('root');
      expect(root).toBeInTheDocument();
      expect(root).toHaveClass('rootClassName');
      expect(root).toHaveClass('rootClassName-2');
      expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');
      expect(root).toHaveStyle('color: rgb(255, 0, 0)');

      expect(rootRef1.current).toBe(rootRef2.current);
      expect(rootRef1.current).toBe(root);

      expect(inputRef1.current).toBe(inputRef2.current);
      expect(inputRef1.current).toBe(input);

      fireEvent.click(input);
      expect(onInputClick).toHaveBeenCalledTimes(1);
      expect(onRootClick1).toHaveBeenCalledTimes(1);
      expect(onRootClick2).toHaveBeenCalledTimes(1);

      fireEvent.click(root);
      expect(onRootClick1).toHaveBeenCalledTimes(2);
      expect(onRootClick2).toHaveBeenCalledTimes(2);

      await userEvent.type(input, 'v');
      expect(onInputChange1).toHaveBeenCalledTimes(1);
      expect(onInputChange2).toHaveBeenCalledTimes(1);
    }),
  );

  it(
    'renders empty text',
    withFakeTimers(async () => {
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
    }),
  );

  it(
    'filters options',
    withFakeTimers(async () => {
      const result = render(
        <ChipsSelect options={colors} defaultValue={[]} dropdownTestId="dropdown" />,
      );
      await userEvent.type(result.getByRole('combobox'), 'Син');
      await waitForFloatingPosition();
      const dropdownLocator = result.getByTestId('dropdown');
      expect(within(dropdownLocator).getAllByRole('option')).toHaveLength(1);
      expect(within(dropdownLocator).getByRole('option', { name: 'Синий' })).toBeTruthy();
    }),
  );

  it(
    'should sort options by sortFn prop',
    withFakeTimers(async () => {
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
        <ChipsSelect
          options={options}
          defaultValue={[]}
          sortFn={byAsc}
          dropdownTestId="dropdown"
        />,
      );
      await checkOptionsOrder(['1', '2', '3']);

      // Сортируем по убыванию
      rerender(
        <ChipsSelect
          options={options}
          defaultValue={[]}
          sortFn={byDesc}
          dropdownTestId="dropdown"
        />,
      );
      await checkOptionsOrder(['3', '2', '1']);
    }),
  );

  it(
    'shows spinner if fetching',
    withFakeTimers(async () => {
      const result = render(<ChipsSelect fetching defaultValue={[]} dropdownTestId="dropdown" />);
      await userEvent.click(result.getByRole('combobox'));
      await waitForFloatingPosition();
      const dropdownLocator = result.getByTestId('dropdown');
      expect(within(dropdownLocator).getByRole('status')).toBeTruthy();
    }),
  );

  it.each(['click', 'focus'])(
    'opens dropdown when %s on input field',
    withFakeTimers<[string]>(async (eventType) => {
      const onOpen = vi.fn();
      const result = render(
        <ChipsSelect
          options={colors}
          defaultValue={[]}
          dropdownTestId="dropdown"
          onOpen={onOpen}
        />,
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
    }),
  );

  it(
    'closes options on click outside',
    withFakeTimers(async () => {
      const onClose = vi.fn();
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
    }),
  );

  it(
    'should check custom fields when onChange',
    withFakeTimers(async () => {
      const onChange = vi.fn();
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
      expect(onChange).toHaveBeenCalledExactlyOnceWith([{ ...FIRST_OPTION, custom: '0' }]);
    }),
  );

  it.each(['{ArrowDown}', 'typing text'])(
    'closes dropdown on {Escape} and open when %s',
    withFakeTimers<[string]>(async (type) => {
      const onOpen = vi.fn();
      const onClose = vi.fn();
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
    }),
  );

  it.each([
    { closeAfterSelect: true, description: 'closes' },
    { closeAfterSelect: false, description: 'does not close' },
  ])(
    '$description dropdown after select',
    withFakeTimers<[{ closeAfterSelect: boolean }]>(async ({ closeAfterSelect }) => {
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
    }),
  );

  it.each([
    { selectedBehavior: 'highlight' as const, description: 'hides' },
    { selectedBehavior: 'hide' as const, description: 'does not hide' },
  ])(
    '$description selected option if `selectedBehavior` is `"$selectedBehavior"`',
    withFakeTimers<[{ selectedBehavior: 'hide' | 'highlight' }]>(async ({ selectedBehavior }) => {
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
    }),
  );

  it(
    'should cycle navigates with {ArrowUp} and {ArrowDown}',
    withFakeTimers(async () => {
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
    }),
  );

  it(
    'adds chip from dropdown with click to option',
    withFakeTimers(async () => {
      const onChangeStart = vi.fn();
      const onChange = vi.fn();
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
      expect(onChange).toHaveBeenCalledExactlyOnceWith([FIRST_OPTION]);
    }),
  );

  it(
    'adds chip from dropdown with {Enter} to option',
    withFakeTimers(async () => {
      const onChangeStart = vi.fn();
      const onChange = vi.fn();
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
      expect(onChange).toHaveBeenCalledExactlyOnceWith([selectedOption]);
    }),
  );

  it(
    'does not focus input field on chip click',
    withFakeTimers(async () => {
      const result = render(
        <ChipsSelect defaultValue={[FIRST_OPTION, SECOND_OPTION]} options={colors} />,
      );
      const chipEl = result.getByRole('option', { name: withRegExp(FIRST_OPTION.label) });
      await userEvent.click(chipEl);
      expect(result.getByRole('combobox')).not.toHaveFocus();
    }),
  );

  describe('creatable', () => {
    fakeTimersForScope();
    const customChip = { value: 'testvalue', label: 'testvalue' };

    it.each([
      { creatable: true, description: 'adds custom chip' },
      { creatable: false, description: 'does not add custom chip' },
    ])('$description by pressing {Enter}', async ({ creatable }) => {
      const onChange = vi.fn();
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
        expect(onChange).toHaveBeenCalledExactlyOnceWith([customChip]);
      } else {
        expect(onChange).not.toHaveBeenCalled();
      }
    });

    it('adds custom chip by add button in dropdown', async () => {
      const onChange = vi.fn();
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
      expect(onChange).toHaveBeenCalledExactlyOnceWith([customChip]);
    });

    it.each([
      { creatable: true, description: 'adds custom chip' },
      { creatable: false, description: 'does not add custom chip' },
    ])(
      '$description when `addOnBlur` provided and `creatable` is $creatable',
      async ({ creatable }) => {
        const onChange = vi.fn();
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
          expect(onChange).toHaveBeenCalledExactlyOnceWith([customChip]);
        } else {
          expect(onChange).not.toHaveBeenCalledWith([]);
        }
      },
    );
  });

  it.each([{ readOnly: false }, { readOnly: true }])(
    'calls user events (`readOnly` prop is `$readOnly`)',
    withFakeTimers<[{ readOnly: boolean }]>(async ({ readOnly }) => {
      const onFocus = vi.fn();
      const onBlur = vi.fn();
      const onKeyDown = vi.fn();
      const result = render(
        <ChipsSelect
          readOnly={readOnly}
          options={colors}
          defaultValue={[]}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          slotProps={{
            input: {
              'data-testid': 'input',
            },
          }}
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
    }),
  );

  it(
    'should ignore disabled option',
    withFakeTimers(async () => {
      const onChange = vi.fn();
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
    }),
  );

  it(
    'should render wrapper to dropdown content with renderDropdown',
    withFakeTimers(async () => {
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
      await act(async () => {
        fireEvent.click(inputLocator);
        vi.runOnlyPendingTimers();
      });
      expect(screen.getByTestId('wrapper')).toBeInTheDocument();
    }),
  );

  it(
    'checks ChipsSelect placement class for borders when dropdown is opened and closed during  placement change',
    withFakeTimers(async () => {
      const component = render(
        <ChipsSelect options={[FIRST_OPTION, SECOND_OPTION, THIRD_OPTION]} />,
      );
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
    }),
  );

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
});

describe.each<{
  delimiter: string | RegExp | string[];
  str: string;
  expectedValues?: string[];
  expectedInputValue?: string;
}>([
  {
    delimiter: ',',
    str: 'Зеленый,Фиолетовый',
    expectedValues: ['Зеленый', 'Фиолетовый'],
  },
  {
    delimiter: new RegExp(','),
    str: 'Зеленый,Фиолетовый',
    expectedValues: ['Зеленый', 'Фиолетовый'],
  },
  {
    delimiter: /\./,
    str: 'Зеленый.Фиолетовый',
    expectedValues: ['Зеленый', 'Фиолетовый'],
  },
  {
    delimiter: [',', '.'],
    str: 'Зеленый,Фиолетовый.Красный',
    expectedValues: ['Зеленый', 'Фиолетовый', 'Красный'],
  },
  {
    delimiter: '.',
    str: 'Зеленый.Фиолетовый',
    expectedValues: ['Зеленый', 'Фиолетовый'],
  },
  {
    delimiter: [' ', ',', '.', '|'],
    str: 'Зеленый.Фиолетовый,Красный|Розовый Синий',
    expectedValues: ['Зеленый', 'Фиолетовый', 'Красный', 'Розовый', 'Синий'],
  },
  {
    delimiter: ['', ''],
    str: 'Зеленый,Фиолетовый.Красный',
    expectedInputValue: 'Зеленый,Фиолетовый.Красный',
  },
])(
  'should correct use delimiter $delimiter',
  ({ delimiter, str, expectedValues, expectedInputValue }) => {
    fakeTimersForScope();
    it('should add some options by splitting by delimiter when creatable', async () => {
      const onChange = vi.fn();
      render(
        <ChipsSelect
          options={[]}
          defaultValue={[]}
          onChange={onChange}
          delimiter={delimiter}
          creatable
          slotProps={{
            input: {
              'data-testid': 'input',
            },
          }}
        />,
      );
      await act(async () => {
        fireEvent.input(screen.getByTestId('input'), {
          target: { value: str },
        });
        vi.runOnlyPendingTimers();
      });
      if (expectedValues) {
        expect(onChange).toHaveBeenCalledExactlyOnceWith(
          expectedValues.map((value) => ({
            value,
            label: value,
          })),
        );
      } else {
        expect(onChange).not.toHaveBeenCalled();
      }
      expect(screen.getByTestId<HTMLInputElement>('input').value).toBe(expectedInputValue || '');
    });

    it('should not add some options by splitting by delimiter when not creatable', async () => {
      const onChange = vi.fn();
      render(
        <ChipsSelect
          options={[]}
          defaultValue={[]}
          onChange={onChange}
          delimiter={delimiter}
          slotProps={{
            input: {
              'data-testid': 'input',
            },
          }}
        />,
      );
      await act(async () => {
        fireEvent.input(screen.getByTestId('input'), {
          target: { value: str },
        });
        vi.runOnlyPendingTimers();
      });
      expect(onChange).not.toHaveBeenCalled();
      expect(screen.getByTestId<HTMLInputElement>('input').value).toBe(str);
    });
  },
);
