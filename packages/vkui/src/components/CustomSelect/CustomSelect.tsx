import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { useDOM } from '../../lib/dom';
import type { PlacementWithAuto } from '../../lib/floating';
import { defaultFilterFn, type FilterFn } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { debounce } from '../../lib/utils';
import { warnOnce } from '../../lib/warnOnce';
import { TrackerOptionsProps } from '../CustomScrollView/useTrackerVisibility';
import { CustomSelectDropdown } from '../CustomSelectDropdown/CustomSelectDropdown';
import {
  CustomSelectOption,
  CustomSelectOptionProps,
} from '../CustomSelectOption/CustomSelectOption';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormFieldProps } from '../FormField/FormField';
import { NativeSelectProps } from '../NativeSelect/NativeSelect';
import { SelectType } from '../Select/Select';
import { Footnote } from '../Typography/Footnote/Footnote';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { CustomSelectClearButton, CustomSelectClearButtonProps } from './CustomSelectClearButton';
import { CustomSelectInput } from './CustomSelectInput';
import styles from './CustomSelect.module.css';

const sizeYClassNames = {
  none: styles['CustomSelect--sizeY-none'],
  ['compact']: styles['CustomSelect--sizeY-compact'],
};

const findIndexAfter = (options: CustomSelectOptionInterface[] = [], startIndex = -1) => {
  if (startIndex >= options.length - 1) {
    return -1;
  }
  return options.findIndex((option, i) => i > startIndex && !option.disabled);
};

const findIndexBefore = (
  options: CustomSelectOptionInterface[] = [],
  endIndex: number = options.length,
) => {
  let result = -1;
  if (endIndex <= 0) {
    return result;
  }
  for (let i = endIndex - 1; i >= 0; i--) {
    let option = options[i];

    if (!option.disabled) {
      result = i;
      break;
    }
  }
  return result;
};

const warn = warnOnce('CustomSelect');

const checkOptionsValueType = <T extends CustomSelectOptionInterface>(options: T[]) => {
  if (new Set(options.map((item) => typeof item.value)).size > 1) {
    warn(
      'Некоторые значения ваших опций имеют разные типы. onChange всегда возвращает строковый тип.',
      'error',
    );
  }
};

function defaultRenderOptionFn<T extends CustomSelectOptionInterface>({
  option,
  ...props
}: CustomSelectRenderOption<T>): React.ReactNode {
  return <CustomSelectOption {...props} />;
}

const handleOptionDown: MouseEventHandler = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
};

function findSelectedIndex<T extends CustomSelectOptionInterface>(
  options: T[] = [],
  value: SelectValue,
  withClear: boolean,
) {
  if (withClear && value === '') {
    return -1;
  }
  return (
    options.findIndex((item) => {
      value = typeof item.value === 'number' ? Number(value) : value;
      return item.value === value;
    }) ?? -1
  );
}

const filter = <T extends CustomSelectOptionInterface>(
  options: SelectProps<T>['options'],
  inputValue: string,
  filterFn: SelectProps<T>['filterFn'],
) => {
  return typeof filterFn === 'function'
    ? options.filter((option) => filterFn(inputValue, option))
    : options;
};

const defaultOptions: CustomSelectOptionInterface[] = [];

type SelectValue = React.SelectHTMLAttributes<HTMLSelectElement>['value'];

export interface CustomSelectOptionInterface {
  value: SelectValue;
  label: React.ReactElement | string;
  disabled?: boolean;
  [index: string]: any;
}

export interface CustomSelectRenderOption<T extends CustomSelectOptionInterface>
  extends CustomSelectOptionProps {
  option: T;
}

export interface SelectProps<
  OptionInterfaceT extends CustomSelectOptionInterface = CustomSelectOptionInterface,
> extends NativeSelectProps,
    FormFieldProps,
    TrackerOptionsProps {
  /**
   * Если `true`, то при клике на `CustomSelect` в нём появится текстовое поле для поиска по `options`. По умолчанию поиск
   * производится по `option.label`.
   */
  searchable?: boolean;
  /**
   * Текст, который будет отображен, если приходит пустой `options`.
   */
  emptyText?: string;
  /**
   * Событие изменения текстового поля
   */
  onInputChange?: (e: React.ChangeEvent) => void;
  options: OptionInterfaceT[];
  /**
   * Функция для кастомной фильтрации. По умолчанию поиск производится по `option.label`.
   */
  filterFn?: false | FilterFn<OptionInterfaceT>;
  popupDirection?: 'top' | 'bottom';
  /**
   * Рендер-проп для кастомного рендера опции.
   * В объекте аргумента приходят [свойства опции](https://vkcom.github.io/VKUI/#/CustomSelectOption?id=props)
   *
   * > ⚠️  Важно: cвойство опции `disabled` должно выставляться только через проп `options`.
   * > Запрещается выставлять `disabled` проп опциям в обход `options`, иначе `CustomSelect` не будет знать об актуальном состоянии
   * опции.
   */
  renderOption?: (props: CustomSelectRenderOption<OptionInterfaceT>) => React.ReactNode;
  /**
   * Рендер-проп для кастомного рендера содержимого дропдауна.
   * В `defaultDropdownContent` содержится список опций в виде скроллящегося блока.
   */
  renderDropdown?: ({
    defaultDropdownContent,
  }: {
    defaultDropdownContent: React.ReactNode;
  }) => React.ReactNode;
  /**
   * Если `true`, то в дропдауне вместо списка опций рисуется спиннер. При переданных `renderDropdown` и `fetching: true`
   * "победит" `renderDropdown`.
   */
  fetching?: boolean;
  onClose?: VoidFunction;
  onOpen?: VoidFunction;
  /**
   * Иконка раскрывающегося списка
   */
  icon?: React.ReactNode;
  /**
   * Кастомная кнопка для очистки значения.
   * Должна принимать обязательное свойство `onClick`
   */
  ClearButton?: React.ComponentType<CustomSelectClearButtonProps>;
  /**
   * Если `true`, то справа будет отображаться кнопка для очистки значения
   */
  allowClearButton?: boolean;
  /**
   * (e2e) testId кнопки очистки
   */
  clearButtonTestId?: string;
  dropdownOffsetDistance?: number;
  /**
   * Ширина раскрывающегося списка зависит от контента
   */
  dropdownAutoWidth?: boolean;
  forceDropdownPortal?: boolean;
  selectType?: SelectType;
  /**
   * Отключает максимальную высоту по умолчанию
   */
  noMaxHeight?: boolean;
  /**
   * (e2e) testId элемента, внутри которого отображается текст выбранной опции `CustomSelect` или плейсхолдер.
   */
  labelTextTestId?: string;
  nativeSelectTestId?: string;
}

type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;

/**
 * @see https://vkcom.github.io/VKUI/#/CustomSelect
 */
export function CustomSelect<OptionInterfaceT extends CustomSelectOptionInterface>(
  props: SelectProps<OptionInterfaceT>,
) {
  const [opened, setOpened] = React.useState(false);
  const {
    before,
    name,
    className,
    getRef,
    getRootRef,
    popupDirection,
    style,
    onChange,
    children,
    onInputChange: onInputChangeProp,
    renderDropdown,
    onOpen,
    onClose,
    fetching,
    forceDropdownPortal,
    selectType = 'default',
    autoHideScrollbar,
    autoHideScrollbarDelay,
    searchable = false,
    renderOption: renderOptionProp = defaultRenderOptionFn,
    options: optionsProp = defaultOptions as OptionInterfaceT[],
    emptyText = 'Ничего не найдено',
    filterFn = defaultFilterFn,
    icon: iconProp,
    ClearButton = CustomSelectClearButton,
    allowClearButton = false,
    dropdownOffsetDistance = 0,
    dropdownAutoWidth = false,
    noMaxHeight = false,
    ['aria-labelledby']: ariaLabelledBy,
    clearButtonTestId,
    nativeSelectTestId,
    defaultValue,
    required,
    ...restProps
  } = props;

  if (process.env.NODE_ENV === 'development') {
    checkOptionsValueType(optionsProp);
  }

  const { sizeY = 'none' } = useAdaptivity();

  const containerRef = React.useRef<HTMLDivElement>(null);
  const handleRootRef = useExternRef(containerRef, getRootRef);
  const scrollBoxRef = React.useRef<HTMLDivElement | null>(null);
  const selectElRef = useExternRef(getRef);

  const [focusedOptionIndex, setFocusedOptionIndex] = React.useState<number | undefined>(-1);
  const [isControlledOutside, setIsControlledOutside] = React.useState(props.value !== undefined);
  const [inputValue, setInputValue] = React.useState('');
  const [nativeSelectValue, setNativeSelectValue] = React.useState(
    () => props.value ?? defaultValue ?? (allowClearButton ? '' : undefined),
  );
  const [popperPlacement, setPopperPlacement] = React.useState<PlacementWithAuto | undefined>(
    undefined,
  );
  const [options, setOptions] = React.useState(optionsProp);
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState<number | undefined>(
    findSelectedIndex(optionsProp, props.value ?? defaultValue, allowClearButton),
  );

  React.useEffect(() => {
    setIsControlledOutside(props.value !== undefined);
    setNativeSelectValue((nativeSelectValue) => props.value ?? nativeSelectValue);
  }, [props.value]);

  useIsomorphicLayoutEffect(() => {
    if (
      options.some(({ value }) => nativeSelectValue === value) ||
      (allowClearButton && nativeSelectValue === '')
    ) {
      const event = new Event('change', { bubbles: true });

      selectElRef.current?.dispatchEvent(event);
    }
  }, [nativeSelectValue]);

  const selected = React.useMemo(() => {
    if (!options.length) {
      return null;
    }

    return selectedOptionIndex !== undefined ? options[selectedOptionIndex] : undefined;
  }, [options, selectedOptionIndex]);

  const openedClassNames = React.useMemo(
    () =>
      (opened &&
        dropdownOffsetDistance === 0 &&
        (popperPlacement?.includes('top')
          ? styles['CustomSelect--pop-up']
          : styles['CustomSelect--pop-down'])) ||
      undefined,
    [dropdownOffsetDistance, opened, popperPlacement],
  );

  const scrollToElement = React.useCallback((index: number, center = false) => {
    const dropdown = scrollBoxRef.current;
    const item = dropdown ? (dropdown.children[index] as HTMLElement) : null;

    if (!item || !dropdown) {
      return;
    }

    const dropdownHeight = dropdown.offsetHeight;
    const scrollTop = dropdown.scrollTop;
    const itemTop = item.offsetTop;
    const itemHeight = item.offsetHeight;

    if (center) {
      dropdown.scrollTop = itemTop - dropdownHeight / 2 + itemHeight / 2;
    } else if (itemTop + itemHeight > dropdownHeight + scrollTop) {
      dropdown.scrollTop = itemTop - dropdownHeight + itemHeight;
    } else if (itemTop < scrollTop) {
      dropdown.scrollTop = itemTop;
    }
  }, []);

  const focusOptionByIndex = React.useCallback(
    (index: number | undefined, scrollTo = true) => {
      if (index === undefined || index < 0 || index > (options.length ?? 0) - 1) {
        return;
      }

      const option = options[index];

      if (option?.disabled) {
        return;
      }

      if (scrollTo) {
        scrollToElement(index);
      }

      // Это оптимизация, прежде всего, под `onMouseMove`
      setFocusedOptionIndex((focusedOptionIndex) =>
        focusedOptionIndex !== index ? index : focusedOptionIndex,
      );
    },
    [options, scrollToElement],
  );

  const isValidIndex = React.useCallback(
    (index: number) => {
      return index >= 0 && index < (options.length ?? 0);
    },
    [options.length],
  );

  const setScrollBoxRef = React.useCallback(
    (ref: HTMLDivElement | null) => {
      scrollBoxRef.current = ref;

      if (ref && selectedOptionIndex !== undefined && isValidIndex(selectedOptionIndex)) {
        {
          scrollToElement(selectedOptionIndex, true);
        }
      }
    },
    [isValidIndex, scrollToElement, selectedOptionIndex],
  );

  const [keyboardInput, setKeyboardInput] = React.useState('');
  const resetKeyboardInput = React.useCallback(() => {
    setKeyboardInput('');
  }, []);

  const resetFocusedOption = React.useCallback(() => {
    setFocusedOptionIndex(-1);
  }, []);

  const onKeyboardInput = React.useCallback(
    (key: string) => {
      if (!opened) {
        setOpened(true);
      }
      resetFocusedOption();
      const fullInput = keyboardInput + key;

      setKeyboardInput(fullInput);
    },
    [keyboardInput, opened, resetFocusedOption],
  );

  /**
   * Note: сбрасывать `options` через `setOptions(optionsProp)` не нужно.
   *  Сброс происходит в одном из эффекте `updateOptionsAndSelectedOptionIndex()`.
   */
  const close = React.useCallback(() => {
    resetKeyboardInput();

    setInputValue('');
    setOpened(false);
    resetFocusedOption();
    onClose?.();
  }, [onClose, resetKeyboardInput, resetFocusedOption]);

  const selectOption = React.useCallback(
    (index: number) => {
      const item = options[index];

      setNativeSelectValue(item?.value);
      close();

      const shouldTriggerOnChangeWhenControlledAndInnerValueIsOutOfSync =
        isControlledOutside &&
        props.value !== nativeSelectValue &&
        nativeSelectValue === item?.value;

      if (shouldTriggerOnChangeWhenControlledAndInnerValueIsOutOfSync) {
        const event = new Event('change', { bubbles: true });
        selectElRef.current?.dispatchEvent(event);
      }
    },
    [close, options, selectElRef, isControlledOutside, props.value, nativeSelectValue],
  );

  const selectFocused = React.useCallback(() => {
    if (focusedOptionIndex === undefined || !isValidIndex(focusedOptionIndex)) {
      return;
    }

    selectOption(focusedOptionIndex);
  }, [focusedOptionIndex, isValidIndex, selectOption]);

  const open = React.useCallback(() => {
    setOpened(true);
    setFocusedOptionIndex(selectedOptionIndex);

    if (typeof onOpen === 'function') {
      onOpen();
    }
  }, [onOpen, selectedOptionIndex]);

  const onBlur = React.useCallback(() => {
    close();
    const event = new Event('focusout', { bubbles: true });
    selectElRef.current?.dispatchEvent(event);
  }, [close, selectElRef]);

  const onFocus = React.useCallback(() => {
    const event = new Event('focusin', { bubbles: true });
    selectElRef.current?.dispatchEvent(event);
  }, [selectElRef]);

  const onClick = React.useCallback(() => {
    if (opened) {
      close();
    } else {
      open();
    }
  }, [close, open, opened]);

  const handleKeyUp = React.useMemo(() => debounce(resetKeyboardInput, 1000), [resetKeyboardInput]);

  const focusOption = React.useCallback(
    (type: 'next' | 'prev') => {
      let index = focusedOptionIndex;

      if (type === 'next') {
        const nextIndex = findIndexAfter(options, index);
        index = nextIndex === -1 ? findIndexAfter(options) : nextIndex; // Следующий за index или первый валидный до index
      } else if (type === 'prev') {
        const beforeIndex = findIndexBefore(options, index);
        index = beforeIndex === -1 ? findIndexBefore(options) : beforeIndex; // Предшествующий index или последний валидный после index
      }

      focusOptionByIndex(index);
    },
    [focusOptionByIndex, focusedOptionIndex, options],
  );

  React.useEffect(
    function updateOptionsAndSelectedOptionIndex() {
      const value = props.value ?? nativeSelectValue ?? defaultValue;

      const options =
        searchable && inputValue !== undefined
          ? filter(optionsProp, inputValue, filterFn)
          : optionsProp;

      setOptions(options);
      setSelectedOptionIndex(findSelectedIndex(options, value, allowClearButton));
    },
    [
      filterFn,
      inputValue,
      nativeSelectValue,
      optionsProp,
      defaultValue,
      props.value,
      searchable,
      allowClearButton,
    ],
  );

  const onNativeSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newSelectedOptionIndex = findSelectedIndex(
      options,
      e.currentTarget.value,
      allowClearButton,
    );

    if (selectedOptionIndex !== newSelectedOptionIndex) {
      if (!isControlledOutside) {
        setSelectedOptionIndex(newSelectedOptionIndex);
      }
      onChange?.(e);
    }
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      onInputChangeProp && onInputChangeProp(e);

      const options = filter(optionsProp, e.target.value, filterFn);
      setOptions(options);
      setSelectedOptionIndex(findSelectedIndex(options, nativeSelectValue, allowClearButton));

      setInputValue(e.target.value);
    },
    [filterFn, nativeSelectValue, onInputChangeProp, optionsProp, allowClearButton],
  );

  const areOptionsShown = React.useCallback(() => {
    return scrollBoxRef.current !== null;
  }, []);

  const handleKeyDownSelect = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key.length === 1 && event.key !== ' ') {
        onKeyboardInput(event.key);
        return;
      }

      ['ArrowUp', 'ArrowDown', 'Escape', 'Enter'].includes(event.key) &&
        areOptionsShown() &&
        event.preventDefault();

      switch (event.key) {
        case 'ArrowUp':
          if (opened) {
            areOptionsShown() && focusOption('prev');
          } else {
            open();
          }
          break;
        case 'ArrowDown':
          if (opened) {
            areOptionsShown() && focusOption('next');
          } else {
            open();
          }
          break;
        case 'Escape':
          close();
          break;
        case 'Backspace':
        case 'Delete': {
          if (!opened) {
            setOpened(true);
          }
          resetFocusedOption();

          break;
        }
        case 'Enter':
        case 'Spacebar':
        case ' ':
          if (opened) {
            areOptionsShown() && selectFocused();
          } else {
            open();
          }
          break;
      }
    },
    [
      areOptionsShown,
      close,
      focusOption,
      onKeyboardInput,
      open,
      opened,
      selectFocused,
      resetFocusedOption,
    ],
  );

  const handleOptionClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const index = Array.prototype.indexOf.call(
        e.currentTarget.parentNode?.children,
        e.currentTarget,
      );
      const option = options[index];

      if (option && !option.disabled) {
        selectOption(index);
      }
    },
    [options, selectOption],
  );

  const prevMousePositionRef = React.useRef<{
    x: React.MouseEvent['clientX'];
    y: React.MouseEvent['clientY'];
  }>({ x: 0, y: 0 });
  const focusOptionOnMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const isMouseChangedPosition =
        Math.abs(prevMousePositionRef.current.x - e.clientX) >= 1 ||
        Math.abs(prevMousePositionRef.current.y - e.clientY) >= 1;

      if (isMouseChangedPosition) {
        focusOptionByIndex(
          Array.prototype.indexOf.call(e.currentTarget.parentNode?.children, e.currentTarget),
          false,
        );
      }

      prevMousePositionRef.current = { x: e.clientX, y: e.clientY };
    },
    [focusOptionByIndex],
  );

  const popupAriaId = React.useId();
  const renderOption = React.useCallback(
    (option: OptionInterfaceT, index: number) => {
      const hovered = index === focusedOptionIndex;
      const selected = index === selectedOptionIndex;

      return (
        <React.Fragment key={`${option.value}`}>
          {renderOptionProp({
            option,
            hovered,
            children: option.label,
            selected,
            disabled: option.disabled,
            onClick: handleOptionClick,
            onMouseDown: handleOptionDown,
            // Используем `onMouseMove` вместо `onMouseEnter/onMouseOver`.
            // Потому что если при навигации с клавиатуры курсор наведён на
            // список, то при первом автоматическом скролле списка вызывается событие MouseOver/MouseEnter
            // обработчик которого фокусирует опцию под курсором, хотя при навигация с клавиатуры пользователь мог уйти дальше по списку, это путает.
            // Причём координаты события меняются на пару пикселей по сравнению с прошлым вызовом,
            // а значит нельзя на них опираться, чтобы запретить обработку такого события.
            // C mousemove такой проблемы нет, что позволяет реализовать поведение при наведении с клавиатуры и при наведении мышью идентично `<select>`.
            onMouseMove: focusOptionOnMouseMove,
            id: `${popupAriaId}-${option.value}`,
          })}
        </React.Fragment>
      );
    },
    [
      focusedOptionIndex,
      handleOptionClick,
      focusOptionOnMouseMove,
      renderOptionProp,
      selectedOptionIndex,
      popupAriaId,
    ],
  );

  const resolvedContent = React.useMemo(() => {
    const defaultDropdownContent =
      options?.length > 0 ? (
        options.map(renderOption)
      ) : (
        <Footnote className={styles['CustomSelect__empty']}>{emptyText}</Footnote>
      );

    if (typeof renderDropdown === 'function') {
      return renderDropdown({ defaultDropdownContent });
    } else {
      return defaultDropdownContent;
    }
  }, [emptyText, options, renderDropdown, renderOption]);

  const selectInputRef = React.useRef<HTMLInputElement | null>(null);
  const focusOnInputTimerRef = React.useRef<ReturnType<typeof setTimeout>>();
  const focusOnInput = React.useCallback(() => {
    clearTimeout(focusOnInputTimerRef.current);

    focusOnInputTimerRef.current = setTimeout(() => {
      selectInputRef.current && selectInputRef.current.focus();
    }, 0);
  }, []);
  useIsomorphicLayoutEffect(function clearFocusOnInputTimer() {
    return () => {
      clearTimeout(focusOnInputTimerRef.current);
    };
  }, []);

  const controlledValueSet = isControlledOutside && props.value !== '';
  const uncontrolledValueSet = !isControlledOutside && nativeSelectValue !== '';
  const clearButtonShown =
    allowClearButton && !opened && (controlledValueSet || uncontrolledValueSet);

  const clearButton = React.useMemo(() => {
    if (!clearButtonShown) {
      return null;
    }

    return (
      <ClearButton
        className={iconProp === undefined ? styles['CustomSelect--clear-icon'] : undefined}
        onClick={function clearSelectState() {
          setNativeSelectValue('');
          setInputValue('');
          focusOnInput();
        }}
        disabled={restProps.disabled}
        data-testid={clearButtonTestId}
      />
    );
  }, [
    clearButtonShown,
    ClearButton,
    iconProp,
    restProps.disabled,
    clearButtonTestId,
    focusOnInput,
  ]);

  const icon = React.useMemo(() => {
    if (iconProp !== undefined) {
      return iconProp;
    }

    return (
      <DropdownIcon
        className={clearButtonShown ? styles['CustomSelect__dropdown-icon'] : undefined}
        opened={opened}
      />
    );
  }, [clearButtonShown, iconProp, opened]);

  const afterIcons = (icon || clearButtonShown) && (
    <React.Fragment>
      {clearButton}
      {icon}
    </React.Fragment>
  );

  const { document } = useDOM();
  const passClickAndFocusToInputOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Раньше внешней оберткой CustomSelect был <label>, что позволяло по клику в любую область CustomSelect,
      // даже где нету интерактивного элемента, фокусировать <input> и передавать на него событие клика.
      // Так как мы больше не оборачиваем CustomSelect в <label>, то для обертки CustomSelect мы симулируем работу <label>.
      // передаем фокус и клик по <input>, если пользователь кликнул в зоне обертки.
      // В <label> мы не больше не оборачиваем, потому что это заставляет скринридер
      // дважды произносить текст выбранной опции при фокусе, если CustomSelect связан с внешним <label>.
      // Воспроизводится в некоторых версиях Chrome, при навигации по странице с помощью стрелок.
      // Договорились со специалистом по доступности убрать <label>-обёртки из Select и CustomSelect

      if (!selectInputRef.current || !document) {
        return;
      }

      const clickTargetIsNotAnInput = e.target !== selectInputRef.current;
      if (clickTargetIsNotAnInput) {
        selectInputRef.current.click();

        const inputIsNotFocused = document.activeElement !== selectInputRef.current;
        if (inputIsNotFocused) {
          focusOnInput();
        }
      }
    },
    [document, focusOnInput],
  );

  const preventInputBlurWhenClickInsideFocusedSelectArea = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    // Так как инпут больше не оборачивается пустым лэйблом, то клик внутри обертки,
    // но вне инпута (например по иконке дропдауна), будет убирать фокус с инпута.
    // Чтобы в такой ситуации отключить blur инпута мы превентим mousedown событие обёртки
    const isInputFocused = document && document.activeElement === selectInputRef.current;
    if (isInputFocused) {
      e.preventDefault();
    }
  };

  const ariaActiveDescendantOptionIndex: undefined | number =
    focusedOptionIndex !== -1 ? focusedOptionIndex : undefined;
  const ariaActiveDescendantId =
    ariaActiveDescendantOptionIndex !== undefined
      ? options[ariaActiveDescendantOptionIndex] && options[ariaActiveDescendantOptionIndex].value
      : null;

  const selectInputAriaProps: React.HTMLAttributes<HTMLElement> = {
    'role': 'combobox',
    'aria-controls': popupAriaId,
    'aria-owns': popupAriaId,
    'aria-expanded': opened,
    ['aria-activedescendant']:
      ariaActiveDescendantId && opened ? `${popupAriaId}-${ariaActiveDescendantId}` : undefined,
    'aria-labelledby': ariaLabelledBy,
    'aria-haspopup': 'listbox',
    'aria-autocomplete': 'none',
  };

  const focusWithin = useFocusWithin(handleRootRef);

  return (
    <div
      className={classNames(
        styles['CustomSelect'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        className,
      )}
      style={style}
      ref={handleRootRef}
      onClick={passClickAndFocusToInputOnClick}
      onMouseDown={preventInputBlurWhenClickInsideFocusedSelectArea}
    >
      {focusWithin && selected && !opened && (
        <VisuallyHidden aria-live="polite">{selected.label}</VisuallyHidden>
      )}
      <CustomSelectInput
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck="false"
        {...restProps}
        {...selectInputAriaProps}
        getRef={selectInputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        className={openedClassNames}
        readOnly={!searchable}
        fetching={fetching}
        value={inputValue}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDownSelect}
        onChange={onInputChange}
        onClick={onClick}
        before={before}
        after={afterIcons}
        selectType={selectType}
      >
        {selected?.label}
      </CustomSelectInput>
      <select
        ref={selectElRef}
        name={name}
        onChange={onNativeSelectChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onClick={props.onClick}
        value={nativeSelectValue}
        aria-hidden
        className={styles['CustomSelect__control']}
        data-testid={nativeSelectTestId}
        required={required}
      >
        {allowClearButton && <option key="" value="" />}
        {optionsProp.map((item) => (
          <option key={`${item.value}`} value={item.value} />
        ))}
      </select>
      {opened && (
        <CustomSelectDropdown
          targetRef={containerRef}
          placement={popupDirection}
          scrollBoxRef={setScrollBoxRef}
          onPlacementChange={setPopperPlacement}
          onMouseLeave={resetFocusedOption}
          fetching={fetching}
          offsetDistance={dropdownOffsetDistance}
          autoWidth={dropdownAutoWidth}
          forcePortal={forceDropdownPortal}
          autoHideScrollbar={autoHideScrollbar}
          autoHideScrollbarDelay={autoHideScrollbarDelay}
          noMaxHeight={noMaxHeight}
          role="listbox"
          id={popupAriaId}
          aria-labelledby={ariaLabelledBy}
          tabIndex={-1}
        >
          {resolvedContent}
        </CustomSelectDropdown>
      )}
    </div>
  );
}
