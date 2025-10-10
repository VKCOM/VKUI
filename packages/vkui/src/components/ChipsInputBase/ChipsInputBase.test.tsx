import * as React from 'react';
import { act, createRef } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import {
  baselineComponent,
  fakeTimersForScope,
  userEvent,
  withFakeTimers,
  withRegExp,
} from '../../testing/utils';
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
  const onAddChipOption = vi.fn();
  const onRemoveChipOption = vi.fn();
  const onClearOptions = vi.fn();

  baselineComponent(
    (props) => (
      <>
        <label htmlFor="chips">Chips Input</label>
        <ChipsInputBaseTest
          id="chips"
          chipsListLabel="Выбранные опции"
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
          value={[RED_OPTION]}
          {...props}
        />
      </>
    ),
    {
      a11yConfig: {
        rules: {
          // Внутри Chip c role="option" находится кнопка удаления
          'nested-interactive': { enabled: false },
        },
      },
    },
  );

  beforeEach(() => {
    onAddChipOption.mockClear();
    onRemoveChipOption.mockClear();
    onClearOptions.mockClear();
  });

  it(
    'should work with slotsProps',
    withFakeTimers(async () => {
      const rootRef1 = createRef<HTMLDivElement>();
      const rootRef2 = createRef<HTMLDivElement>();
      const inputRef1 = createRef<HTMLInputElement>();
      const inputRef2 = createRef<HTMLInputElement>();
      const onClick1 = vi.fn();
      const onClick2 = vi.fn();
      const onRootClick = vi.fn();
      const onInputChange1 = vi.fn();
      const onInputChange2 = vi.fn();

      render(
        <ChipsInputBase
          value={[]}
          inputValue="input-value"
          onInputChange={onInputChange1}
          data-testid="input"
          className="rootClassName"
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
          getRootRef={rootRef1}
          getRef={inputRef1}
          onClick={onClick1}
          style={{
            backgroundColor: 'rgb(255, 0, 0)',
          }}
          slotsProps={{
            root: {
              'data-testid': 'root',
              'className': 'rootClassName-2',
              'style': {
                color: 'rgb(255, 0, 0)',
              },
              'getRootRef': rootRef2,
              'onClick': onRootClick,
            },
            input: {
              'className': 'inputClassName',
              'getRootRef': inputRef2,
              'data-testid': 'input-2',
              'onClick': onClick2,
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
      expect(onClick1).toHaveBeenCalledTimes(1);
      expect(onClick2).toHaveBeenCalledTimes(1);

      fireEvent.click(root);
      expect(onRootClick).toHaveBeenCalledTimes(2);

      await userEvent.type(input, 'v');
      expect(onInputChange1).toHaveBeenCalledTimes(1);
      expect(onInputChange2).toHaveBeenCalledTimes(1);
    }),
  );

  it('renders values passed to it', () => {
    const result = render(
      <ChipsInputBaseTest
        value={[RED_OPTION]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
        onClear={onClearOptions}
      />,
    );
    expect(result.queryByText('Красный')).not.toBeNull();
  });

  it(
    'adds chip',
    withFakeTimers(async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      await userEvent.type(result.getByTestId('chips-input'), 'Красный{enter}');
      expect(onAddChipOption).toHaveBeenCalledExactlyOnceWith('Красный');
    }),
  );

  it(
    'adds value on blur event if `addOnBlur` is `true`',
    withFakeTimers(async () => {
      const result = render(
        <ChipsInputBaseTest
          addOnBlur
          value={[]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      await userEvent.type(result.getByTestId('chips-input'), 'Красный');
      await userEvent.click(document.body);
      expect(onAddChipOption).toHaveBeenCalledExactlyOnceWith('Красный');
    }),
  );

  it(
    'removes chip with icon button',
    withFakeTimers(async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      const chipRedLocator = result.getByRole('option', { name: withRegExp(RED_OPTION.label) });
      const removeButton = within(chipRedLocator).getByRole('button');
      await userEvent.click(removeButton);
      expect(onRemoveChipOption).toHaveBeenCalledExactlyOnceWith(RED_OPTION.value);
    }),
  );

  it.each(['Delete', 'Backspace'])(
    'removes chip when pressing {%s}',
    withFakeTimers(async (type) => {
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      await userEvent.tab();
      await userEvent.type(
        result.getByRole('option', { name: withRegExp(RED_OPTION.label) }),
        `{${type}}`,
      );
      expect(onRemoveChipOption).toHaveBeenCalledExactlyOnceWith(RED_OPTION.value);
    }),
  );

  it.each(['Delete', 'Backspace'])(
    'does not delete chips when pressing {%s} in readonly mode',
    withFakeTimers(async (type) => {
      const result = render(
        <ChipsInputBaseTest
          readOnly
          value={[RED_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      await userEvent.tab();
      await userEvent.type(
        result.getByRole('option', { name: withRegExp(RED_OPTION.label) }),
        `{${type}}`,
      );
      expect(onRemoveChipOption).not.toHaveBeenCalled();
    }),
  );

  describe('focus', () => {
    fakeTimersForScope();
    it('focuses on input field after clicking to container', async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      const containerEl = result.getByRole('listbox').closest('div')!;
      await userEvent.click(containerEl);
      expect(result.getByTestId('chips-input')).toHaveFocus();
    });

    it('focuses to input after clicking to container', async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      const containerEl = result.getByRole('listbox').closest('div')!;
      await userEvent.click(containerEl);
      expect(result.getByTestId('chips-input')).toHaveFocus();
    });

    it('focuses on input field on clicking on them', async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      await userEvent.click(result.getByTestId('chips-input'));
      expect(result.getByTestId('chips-input')).toHaveFocus();
    });

    it('focuses on chip after clicking on them', async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      const chipLocator = result.getByRole('option', { name: withRegExp(RED_OPTION.label) });
      await userEvent.click(chipLocator);
      expect(chipLocator).toHaveFocus();
    });

    it('focuses to last chip when pressing {Backspace} in input field', async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION]}
          inputValue="0"
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      const chipsInputLocator = result.getByTestId('chips-input');

      await userEvent.type(chipsInputLocator, '{Backspace}');
      expect(chipsInputLocator).toHaveFocus();

      await userEvent.type(chipsInputLocator, '{Backspace}');
      const listbox = chipsInputLocator.previousSibling;
      const lastChip = listbox?.lastChild;
      expect(lastChip).toHaveFocus();
    });

    it('navigates between chips with arrow buttons (it should be cycle)', async () => {
      const value = [RED_OPTION, BLUE_OPTION, YELLOW_OPTION];
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION, BLUE_OPTION, YELLOW_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      const [chipRedLocator, chipBlueLocator, chipYellowLocator] = value.map(({ label }) =>
        result.getByRole('option', { name: withRegExp(label) }),
      );

      await userEvent.type(chipRedLocator, '{ArrowRight}');
      expect(chipBlueLocator).toHaveFocus();

      await userEvent.type(chipBlueLocator, '{ArrowRight}');
      expect(chipYellowLocator).toHaveFocus();

      await userEvent.type(chipYellowLocator, '{ArrowRight}');
      expect(chipRedLocator).toHaveFocus();

      await userEvent.type(chipRedLocator, '{ArrowLeft}');
      expect(chipYellowLocator).toHaveFocus();

      await userEvent.type(chipYellowLocator, '{ArrowLeft}');
      expect(chipBlueLocator).toHaveFocus();

      await userEvent.type(chipBlueLocator, '{ArrowRight}');
      expect(chipYellowLocator).toHaveFocus();

      await userEvent.type(chipYellowLocator, '{Home}');
      expect(chipRedLocator).toHaveFocus();

      await userEvent.type(chipRedLocator, '{End}');
      expect(chipYellowLocator).toHaveFocus();
    });

    it('navigates with {Tab}', async () => {
      const value = [RED_OPTION, BLUE_OPTION, YELLOW_OPTION];
      const result = render(
        <ChipsInputBaseTest
          value={[RED_OPTION, BLUE_OPTION, YELLOW_OPTION]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      const chipsInputLocator = result.getByTestId('chips-input');
      const [chipRedLocator, chipBlueLocator] = value.map(({ label }) =>
        result.getByRole('option', { name: withRegExp(label) }),
      );

      await userEvent.tab();
      expect(chipRedLocator).toHaveFocus();

      await userEvent.tab();
      expect(chipsInputLocator).toHaveFocus();

      await userEvent.tab({ shift: true });
      expect(chipRedLocator).toHaveFocus();

      await userEvent.type(chipRedLocator, '{ArrowRight}');
      expect(chipBlueLocator).toHaveFocus();

      await userEvent.tab();
      expect(chipsInputLocator).toHaveFocus();

      await userEvent.tab({ shift: true });
      expect(chipBlueLocator).toHaveFocus();

      await userEvent.tab({ shift: true });
      expect(document.body).toHaveFocus();

      await userEvent.tab();
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
          onClear={onClearOptions}
        />,
      );
      const chipRedLocator = result.getByRole('option', { name: withRegExp(RED_OPTION.label) });
      await userEvent.type(chipRedLocator, '{Delete}');
      const nextLocatorWithFocus =
        value.length <= 1
          ? result.getByTestId('chips-input')
          : result.getByRole('option', { name: withRegExp(BLUE_OPTION.label) });
      expect(nextLocatorWithFocus).toHaveFocus();
    });
  });

  it.each([{ readOnly: false }, { readOnly: true }])(
    'calls user events (`readOnly` prop is `$readOnly`)',
    withFakeTimers(async ({ readOnly }) => {
      const onBlur = vi.fn();
      render(
        <ChipsInputBaseTest
          readOnly={readOnly}
          value={[]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onBlur={onBlur}
          onClear={onClearOptions}
        />,
      );

      await userEvent.tab();
      await userEvent.tab({ shift: true });

      expect(onBlur).toHaveBeenCalled();
    }),
  );

  it('applies option readOnly and disabled to chips', () => {
    render(
      <ChipsInputBaseTest
        value={[
          { ...RED_OPTION, readOnly: true },
          { ...BLUE_OPTION, disabled: true },
          YELLOW_OPTION,
        ]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
        onClear={onClearOptions}
      />,
    );

    const redOption = screen.getByRole('option', { name: /Красный/ });
    expect(redOption.getAttribute('aria-readonly')).toBeTruthy();
    expect(redOption.getAttribute('aria-disabled')).toBeFalsy();

    const blueOption = screen.getByRole('option', { name: /Синий/ });
    expect(blueOption.getAttribute('aria-readonly')).toBeFalsy();
    expect(blueOption.getAttribute('aria-disabled')).toBeTruthy();

    const yellowOption = screen.getByRole('option', { name: /Жёлтый/ });
    expect(yellowOption.getAttribute('aria-readonly')).toBeFalsy();
    expect(yellowOption.getAttribute('aria-disabled')).toBeFalsy();
  });

  it('applies input readOnly and disabled to chips: all readOnly and disabled', () => {
    render(
      <ChipsInputBaseTest
        readOnly
        disabled
        value={[
          { ...RED_OPTION, readOnly: true },
          { ...BLUE_OPTION, disabled: true },
          YELLOW_OPTION,
        ]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
        onClear={onClearOptions}
      />,
    );

    const redOption = screen.getByRole('option', { name: /Красный/ });
    expect(redOption.getAttribute('aria-readonly')).toBeTruthy();
    expect(redOption.getAttribute('aria-disabled')).toBeTruthy();

    const blueOption = screen.getByRole('option', { name: /Синий/ });
    expect(blueOption.getAttribute('aria-readonly')).toBeTruthy();
    expect(blueOption.getAttribute('aria-disabled')).toBeTruthy();

    const yellowOption = screen.getByRole('option', { name: /Жёлтый/ });
    expect(yellowOption.getAttribute('aria-readonly')).toBeTruthy();
    expect(yellowOption.getAttribute('aria-disabled')).toBeTruthy();
  });

  it('should call onClear callback when click to clear button', () => {
    render(
      <ChipsInputBaseTest
        value={[RED_OPTION, BLUE_OPTION, YELLOW_OPTION]}
        clearButtonTestId="clear-button"
        clearButtonShown={true}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
        onClear={onClearOptions}
      />,
    );
    expect(screen.getByTestId('clear-button')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('clear-button'));

    expect(onClearOptions).toHaveBeenCalledTimes(1);
  });

  it('should call focus to input when click clear button', () => {
    render(
      <ChipsInputBaseTest
        value={[RED_OPTION, BLUE_OPTION, YELLOW_OPTION]}
        clearButtonTestId="clear-button"
        clearButtonShown={true}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
        onClear={onClearOptions}
      />,
    );
    expect(screen.getByTestId('clear-button')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('clear-button'));

    expect(screen.getByTestId('chips-input')).toHaveFocus();
  });

  it(
    'remove option by backspace when option value is number',
    withFakeTimers(async () => {
      const result = render(
        <ChipsInputBaseTest
          value={[{ value: 1, label: 'Красный' }]}
          onAddChipOption={onAddChipOption}
          onRemoveChipOption={onRemoveChipOption}
          onClear={onClearOptions}
        />,
      );
      await userEvent.tab();
      await userEvent.type(
        result.getByRole('option', { name: withRegExp('Красный') }),
        `{Backspace}`,
      );
      expect(onRemoveChipOption).toHaveBeenCalledExactlyOnceWith(1);
    }),
  );

  it('check correct mouseDown event preventDefault', async () => {
    let event: MouseEvent | null = null;

    render(
      <ChipsInputBaseTest
        value={[{ value: 1, label: 'Красный' }]}
        onAddChipOption={onAddChipOption}
        onRemoveChipOption={onRemoveChipOption}
        onClear={onClearOptions}
      />,
    );

    const root = screen.getByRole('group');
    root.addEventListener('mousedown', (e) => {
      event = e;
    });

    const checkPreventDefault = (prevented = true) => {
      expect(!!event && event.defaultPrevented).toBe(prevented);
    };

    const input = screen.getByTestId<HTMLInputElement>('chips-input');
    // Проверяем, что при mouseDown в input не происходит preventDefault
    fireEvent.mouseDown(input);
    checkPreventDefault(false);

    const option = screen.getByRole('option', {
      name: new RegExp(RED_OPTION.label),
    });
    // Проверяем, что при mouseDown в option не происходит preventDefault
    fireEvent.mouseDown(option);
    checkPreventDefault(false);
    act(() => option.focus());

    // Проверяем, что при mouseDown в root, когда option в фокусе не происходит preventDefault
    fireEvent.mouseDown(root);
    checkPreventDefault(false);
    act(() => option.blur());

    // Проверяем, что при mouseDown в root, когда option не в фокусе происходит preventDefault
    fireEvent.mouseDown(root);
    checkPreventDefault(true);

    fireEvent.mouseDown(screen.getByRole('listbox'));
    checkPreventDefault(true);
  });
});
